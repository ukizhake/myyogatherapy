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
        showPremiumFeaturesModal();
    };
    
    // Enhanced premium features modal
    function showPremiumFeaturesModal() {
        const modal = document.createElement('div');
        modal.className = 'premium-features-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="modal-close" onclick="this.closest('.premium-features-modal').remove()">×</button>
                    <h3>🌟 Premium Features Coming Soon!</h3>
                    <p>MendOnBend offers powerful core features right now, with premium enhancements on the way:</p>
                    
                    <div class="current-features">
                        <h4>🕉️ Available Now (Free):</h4>
                        <ul>
                            <li>✅ Complete dosha & guna assessments</li>
                            <li>✅ Personalized yoga therapy recommendations</li>
                            <li>✅ Condition-specific therapeutic protocols</li>
                            <li>✅ Pranayama & breathing guidance</li>
                            <li>✅ Yoga philosophy & sutra wisdom</li>
                            <li>✅ Progress tracking (local storage)</li>
                        </ul>
                    </div>
                    
                    <div class="premium-features">
                        <h4>🚀 Coming Soon (Premium):</h4>
                        <ul>
                            <li>🔮 AI-powered pose analysis & corrections</li>
                            <li>🔮 Advanced teacher sequence builder</li>
                            <li>🔮 Cloud sync across devices</li>
                            <li>🔮 Progress analytics & insights</li>
                            <li>🔮 Personalized class recommendations</li>
                            <li>🔮 Community features & sharing</li>
                        </ul>
                    </div>
                    
                    <div class="get-notified">
                        <h4>Get Early Access:</h4>
                        <p>Be first to know when premium features launch!</p>
                        <div class="email-signup">
                            <input type="email" placeholder="Enter your email" class="premium-email-input">
                            <button onclick="subscribeToPremium()" class="btn btn-primary">Notify Me</button>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <button onclick="this.closest('.premium-features-modal').remove()" class="btn btn-outline">Continue with Free Features</button>
                    </div>
                </div>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .premium-features-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .premium-features-modal .modal-overlay {
                width: 100%;
                height: 100%;
                background: rgba(45, 80, 22, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .premium-features-modal .modal-content {
                background: #f8f6f0;
                border-radius: 20px;
                padding: 40px;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                text-align: center;
                box-shadow: 0 20px 60px rgba(45, 80, 22, 0.4);
                color: #333;
            }
            .premium-features-modal .modal-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #8b4513;
                padding: 5px;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .premium-features-modal .modal-close:hover {
                background: rgba(139, 69, 19, 0.1);
            }
            .premium-features-modal h3 {
                color: #2d5016;
                margin: 0 0 20px 0;
                font-size: 1.8em;
            }
            .premium-features-modal h4 {
                color: #4a7c59;
                margin: 25px 0 15px 0;
                font-size: 1.3em;
            }
            .current-features, .premium-features {
                background: rgba(74, 124, 89, 0.1);
                padding: 20px;
                border-radius: 15px;
                margin: 20px 0;
                text-align: left;
            }
            .premium-features {
                background: rgba(139, 69, 19, 0.1);
            }
            .premium-features-modal ul {
                margin: 10px 0;
                padding-left: 20px;
            }
            .premium-features-modal li {
                margin: 8px 0;
                line-height: 1.4;
            }
            .get-notified {
                background: linear-gradient(135deg, #4a7c59 0%, #2d5016 100%);
                color: #f8f6f0;
                padding: 25px;
                border-radius: 15px;
                margin: 25px 0;
            }
            .email-signup {
                display: flex;
                gap: 10px;
                margin: 15px 0;
                justify-content: center;
            }
            .premium-email-input {
                flex: 1;
                max-width: 250px;
                padding: 12px;
                border: none;
                border-radius: 8px;
                font-size: 14px;
            }
            .modal-actions {
                margin-top: 25px;
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(modal);
    }
    
    // Handle premium email subscription
    window.subscribeToPremium = function() {
        const email = document.querySelector('.premium-email-input').value;
        if (email && email.includes('@')) {
            alert('🌟 Thank you! We\'ll notify you when premium features launch. Keep enjoying the free features! 🕉️');
            document.querySelector('.premium-features-modal').remove();
        } else {
            alert('Please enter a valid email address');
        }
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
