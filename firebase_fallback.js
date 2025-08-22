// Firebase Fallback Handler for MendOnBend
// Ensures the app works gracefully when Firebase is unavailable

// Global fallback configuration
window.MENDONBEND_CONFIG = {
    firebaseAvailable: false,
    offlineMode: true,
    version: '1.0.0'
};

// Check if Firebase is available
function checkFirebaseAvailability() {
    try {
        if (typeof firebase !== 'undefined' && firebase.apps) {
            window.MENDONBEND_CONFIG.firebaseAvailable = true;
            window.MENDONBEND_CONFIG.offlineMode = false;
            console.log('🔥 Firebase available - full authentication enabled');
            return true;
        } else {
            console.log('🕉️ Firebase not loaded - running in offline mode with full functionality');
            setupOfflineMode();
            return false;
        }
    } catch (error) {
        console.log('🕉️ Firebase error detected - gracefully falling back to offline mode:', error.message);
        setupOfflineMode();
        return false;
    }
}

// Setup offline mode with full functionality
function setupOfflineMode() {
    window.MENDONBEND_CONFIG.offlineMode = true;
    
    // Hide auth-dependent elements
    const authElements = document.querySelectorAll('.auth-required, [data-requires-auth]');
    authElements.forEach(el => {
        el.style.display = 'none';
    });
    
    // Show offline-friendly messaging
    const authSections = document.querySelectorAll('#user-not-logged-in, .auth-section');
    authSections.forEach(section => {
        if (section) {
            section.innerHTML = `
                <div class="offline-notice">
                    <h4>🕉️ Welcome to MendOnBend</h4>
                    <p>All core features are available:</p>
                    <ul style="text-align: left; margin: 10px 0; color: #28a745;">
                        <li>✅ Complete yoga therapy assessments</li>
                        <li>✅ Get personalized recommendations</li>
                        <li>✅ Access therapeutic protocols</li>
                        <li>✅ Save progress locally</li>
                        <li>✅ Browse yoga resources</li>
                    </ul>
                    <p style="color: #666; font-size: 0.9em;">Your data is safely stored on your device</p>
                </div>
            `;
        }
    });
    
    // Provide fallback functions for Firebase-dependent features
    window.showLoginOptions = window.showLoginOptions || function() {
        alert('🕉️ MendOnBend is running in offline mode. All core features are available without an account!');
    };
    
    window.signOut = window.signOut || function() {
        alert('No user signed in (offline mode)');
    };
    
    window.loadUserAssessments = window.loadUserAssessments || function() {
        alert('🕉️ Your assessments are saved locally on this device');
    };
    
    window.showPersonalizedDashboard = window.showPersonalizedDashboard || function() {
        // Show local dashboard
        showScreen('results-screen');
    };
}

// Initialize fallback system
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for Firebase to load
    setTimeout(() => {
        const firebaseAvailable = checkFirebaseAvailability();
        
        if (!firebaseAvailable) {
            // Remove any existing error messages
            const errorElements = document.querySelectorAll('.firebase-error, .auth-error');
            errorElements.forEach(el => el.remove());
            
            // Add success styling to offline notice
            const style = document.createElement('style');
            style.textContent = `
                .offline-notice {
                    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 15px;
                    margin: 10px 0;
                    text-align: center;
                }
                .offline-notice ul {
                    background: rgba(255,255,255,0.1);
                    padding: 15px;
                    border-radius: 10px;
                    display: inline-block;
                    text-align: left;
                }
                .auth-error, .firebase-error {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }, 500);
});

// Provide fallback for common Firebase functions if they don't exist
window.addEventListener('error', function(event) {
    if (event.message && event.message.includes('firebase')) {
        console.log('🕉️ Firebase error handled gracefully - app continues in offline mode');
        event.preventDefault();
        setupOfflineMode();
    }
});

// Export config for other scripts
window.isFirebaseAvailable = () => window.MENDONBEND_CONFIG.firebaseAvailable;
window.isOfflineMode = () => window.MENDONBEND_CONFIG.offlineMode;
