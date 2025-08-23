// Assessment Storage and Persistence System
class AssessmentStorage {
    constructor() {
        this.storageKey = 'mendonbend_assessments';
        this.init();
    }

    init() {
        // Initialize storage structure if it doesn't exist
        if (!localStorage.getItem(this.storageKey)) {
            const initialData = {
                assessments: {},
                history: [],
                lastUpdated: null,
                userPreferences: {}
            };
            localStorage.setItem(this.storageKey, JSON.stringify(initialData));
        }
    }

    // Save assessment result
    saveAssessment(type, result) {
        try {
            const data = this.getStorageData();
            const timestamp = new Date().toISOString();
            
            // Store current assessment
            data.assessments[type] = {
                result: result,
                timestamp: timestamp,
                version: '1.0'
            };

            // Add to history
            data.history.push({
                type: type,
                result: result,
                timestamp: timestamp
            });

            // Keep only last 50 assessments in history
            if (data.history.length > 50) {
                data.history = data.history.slice(-50);
            }

            data.lastUpdated = timestamp;
            localStorage.setItem(this.storageKey, JSON.stringify(data));

            // Try to sync with Firebase if available
            this.syncToFirebase(type, result);

            return true;
        } catch (error) {
            console.error('Error saving assessment:', error);
            return false;
        }
    }

    // Get latest assessment result
    getAssessment(type) {
        try {
            const data = this.getStorageData();
            return data.assessments[type] || null;
        } catch (error) {
            console.error('Error getting assessment:', error);
            return null;
        }
    }

    // Get all assessments
    getAllAssessments() {
        try {
            const data = this.getStorageData();
            return data.assessments;
        } catch (error) {
            console.error('Error getting all assessments:', error);
            return {};
        }
    }

    // Get assessment history
    getHistory(type = null) {
        try {
            const data = this.getStorageData();
            if (type) {
                return data.history.filter(item => item.type === type);
            }
            return data.history;
        } catch (error) {
            console.error('Error getting history:', error);
            return [];
        }
    }

    // Check if user has taken assessment
    hasAssessment(type) {
        const assessment = this.getAssessment(type);
        return assessment !== null;
    }

    // Get time since last assessment
    getTimeSinceAssessment(type) {
        const assessment = this.getAssessment(type);
        if (!assessment) return null;

        const now = new Date();
        const assessmentDate = new Date(assessment.timestamp);
        const diffTime = Math.abs(now - assessmentDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return {
            days: diffDays,
            timestamp: assessment.timestamp,
            isRecent: diffDays <= 7 // Consider recent if within a week
        };
    }

    // Clear all assessments
    clearAllAssessments() {
        try {
            localStorage.removeItem(this.storageKey);
            this.init();
            return true;
        } catch (error) {
            console.error('Error clearing assessments:', error);
            return false;
        }
    }

    // Export assessments for backup
    exportAssessments() {
        try {
            const data = this.getStorageData();
            return JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error exporting assessments:', error);
            return null;
        }
    }

    // Import assessments from backup
    importAssessments(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error importing assessments:', error);
            return false;
        }
    }

    // Private method to get storage data
    getStorageData() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            assessments: {},
            history: [],
            lastUpdated: null,
            userPreferences: {}
        };
    }

    // Sync to Firebase (if available)
    async syncToFirebase(type, result) {
        try {
            // Check if Firebase and user are available
            if (typeof firebase !== 'undefined' && firebase.auth && firebase.auth().currentUser) {
                const user = firebase.auth().currentUser;
                const firestore = firebase.firestore();
                
                await firestore.collection('userAssessments').doc(user.uid).set({
                    [type]: {
                        result: result,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        version: '1.0'
                    }
                }, { merge: true });

                console.log('Assessment synced to Firebase');
            }
        } catch (error) {
            console.log('Firebase sync not available or failed:', error.message);
            // Fail gracefully - local storage still works
        }
    }

    // Load from Firebase (if available)
    async loadFromFirebase() {
        try {
            if (typeof firebase !== 'undefined' && firebase.auth && firebase.auth().currentUser) {
                const user = firebase.auth().currentUser;
                const firestore = firebase.firestore();
                
                const doc = await firestore.collection('userAssessments').doc(user.uid).get();
                if (doc.exists) {
                    const firebaseData = doc.data();
                    const localData = this.getStorageData();
                    
                    // Merge Firebase data with local data (Firebase takes precedence)
                    Object.keys(firebaseData).forEach(type => {
                        if (firebaseData[type].timestamp) {
                            const firebaseTimestamp = firebaseData[type].timestamp.toDate();
                            const localAssessment = localData.assessments[type];
                            
                            // Only update if Firebase version is newer
                            if (!localAssessment || new Date(localAssessment.timestamp) < firebaseTimestamp) {
                                localData.assessments[type] = {
                                    result: firebaseData[type].result,
                                    timestamp: firebaseTimestamp.toISOString(),
                                    version: firebaseData[type].version || '1.0'
                                };
                            }
                        }
                    });
                    
                    localStorage.setItem(this.storageKey, JSON.stringify(localData));
                    return true;
                }
            }
        } catch (error) {
            console.log('Firebase load not available:', error.message);
        }
        return false;
    }

    // Show assessment summary
    showAssessmentSummary() {
        const assessments = this.getAllAssessments();
        const hasAny = Object.keys(assessments).length > 0;
        
        if (!hasAny) {
            return {
                message: "No previous assessments found. Take your first assessment to get personalized recommendations!",
                assessments: {},
                suggestions: ["Take the Guna Assessment", "Take the Klesha Assessment"]
            };
        }

        const summary = {
            message: "Your Assessment History:",
            assessments: {},
            suggestions: []
        };

        Object.keys(assessments).forEach(type => {
            const assessment = assessments[type];
            const timeInfo = this.getTimeSinceAssessment(type);
            
            summary.assessments[type] = {
                result: assessment.result,
                daysAgo: timeInfo ? timeInfo.days : 0,
                isRecent: timeInfo ? timeInfo.isRecent : false
            };

            // Add suggestions for outdated assessments
            if (!timeInfo || !timeInfo.isRecent) {
                summary.suggestions.push(`Retake ${type} assessment (last taken ${timeInfo ? timeInfo.days : 'unknown'} days ago)`);
            }
        });

        return summary;
    }
}

// Global instance
window.assessmentStorage = new AssessmentStorage();

// Auto-load from Firebase when user logs in
document.addEventListener('DOMContentLoaded', () => {
    // Check for user login and load assessments
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                window.assessmentStorage.loadFromFirebase();
            }
        });
    }
});
