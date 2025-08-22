// Firebase Authentication and Data Management for Yoga Therapy App

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyPzDaz8zEd41MkRYNtFBPhjXNiH-LnV4",
  authDomain: "myyogatherapy-b3cf2.firebaseapp.com",
  projectId: "myyogatherapy-b3cf2",
  storageBucket: "myyogatherapy-b3cf2.firebasestorage.app",
  messagingSenderId: "557327954975",
  appId: "1:557327954975:web:2d02949287b760b151912a",
  measurementId: "G-CMEP5ZTC8X"
};

// Check if Firebase is available and initialize
let isFirebaseAvailable = false;
let auth, db;

// Wait for Firebase to load before initializing
function initializeFirebase() {
    try {
        if (typeof firebase !== 'undefined') {
            // Initialize Firebase (only if not already initialized)
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
                console.log('Firebase initialized successfully');
            }
            auth = firebase.auth();
            db = firebase.firestore();
            isFirebaseAvailable = true;
            return true;
        } else {
            console.log('Firebase SDK not loaded - app will work without authentication');
            return false;
        }
    } catch (error) {
        console.warn('Firebase initialization failed:', error);
        console.log('App will work without authentication features');
        isFirebaseAvailable = false;
        return false;
    }
}

// Initialize Firebase when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Try to initialize Firebase with a delay to avoid blocking
    setTimeout(() => {
        initializeFirebase();
    }, 100);
});

// User management class
class YogaTherapyUserManager {
    constructor() {
        this.currentUser = null;
        this.isFirebaseReady = isFirebaseAvailable;
        this.initializeAuthListener();
    }

    // Initialize authentication state listener
    initializeAuthListener() {
        // Wait a bit before checking Firebase availability
        setTimeout(() => {
            if (!isFirebaseAvailable || typeof auth === 'undefined') {
                console.log('Firebase not available, authentication features disabled');
                this.showSimplifiedUI();
                return;
            }

            try {
                auth.onAuthStateChanged((user) => {
                    this.currentUser = user;
                    this.updateUIForAuthState(user);
                    
                    if (user) {
                        console.log('User signed in:', user.email);
                        this.loadUserProfile();
                    } else {
                        console.log('User signed out');
                        this.clearUserData();
                    }
                });
            } catch (error) {
                console.log('Firebase auth not available:', error);
                this.showSimplifiedUI();
            }
        }, 200);
    }

    // Show simplified UI when Firebase is not available
    showSimplifiedUI() {
        const loggedInSection = document.getElementById('user-logged-in');
        const notLoggedInSection = document.getElementById('user-not-logged-in');
        
        if (loggedInSection) loggedInSection.style.display = 'none';
        if (notLoggedInSection) {
            notLoggedInSection.innerHTML = `
                <h4>🕉️ Welcome to Yoga Therapy</h4>
                <p>Take your assessment and get personalized recommendations</p>
                <small>Authentication features temporarily unavailable</small>
            `;
            notLoggedInSection.style.display = 'block';
        }
    }

    // Update UI based on authentication state
    updateUIForAuthState(user) {
        const loggedInSection = document.getElementById('user-logged-in');
        const notLoggedInSection = document.getElementById('user-not-logged-in');
        const userNameSpan = document.getElementById('user-name');

        if (user && loggedInSection && notLoggedInSection) {
            loggedInSection.style.display = 'block';
            notLoggedInSection.style.display = 'none';
            
            if (userNameSpan) {
                userNameSpan.textContent = user.displayName || user.email || 'User';
            }
        } else if (loggedInSection && notLoggedInSection) {
            loggedInSection.style.display = 'none';
            notLoggedInSection.style.display = 'block';
        }
    }

    // Show login modal
    showLoginModal() {
        if (!this.isFirebaseReady) {
            alert('Authentication is not available. Please check your Firebase configuration.');
            return;
        }
        const loginModal = this.createLoginModal();
        document.body.appendChild(loginModal);
    }

    // Create login modal
    createLoginModal() {
        const overlay = document.createElement('div');
        overlay.className = 'quick-advice-overlay';
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                this.closeLoginModal();
            }
        };

        const modal = document.createElement('div');
        modal.className = 'quick-advice-modal';
        modal.innerHTML = `
            <button class="quick-advice-close" onclick="userManager.closeLoginModal()">×</button>
            <h3>🕉️ Join Your Yoga Therapy Journey</h3>
            
            <div class="auth-tabs">
                <button class="auth-tab active" onclick="userManager.showAuthTab('login')">Sign In</button>
                <button class="auth-tab" onclick="userManager.showAuthTab('register')">Create Account</button>
            </div>
            
            <div id="login-tab" class="auth-tab-content active">
                <h4>Welcome Back!</h4>
                <form id="login-form" onsubmit="userManager.handleLogin(event)">
                    <div class="input-group">
                        <label for="login-email">Email:</label>
                        <input type="email" id="login-email" required>
                    </div>
                    <div class="input-group">
                        <label for="login-password">Password:</label>
                        <input type="password" id="login-password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
                
                <div class="auth-divider">or</div>
                
                <button onclick="userManager.signInWithGoogle()" class="btn btn-outline">
                    📧 Sign in with Google
                </button>
                
                <p class="auth-help">
                    <a href="#" onclick="userManager.resetPassword()">Forgot password?</a>
                </p>
            </div>
            
            <div id="register-tab" class="auth-tab-content">
                <h4>Create Your Account</h4>
                <form id="register-form" onsubmit="userManager.handleRegister(event)">
                    <div class="input-group">
                        <label for="register-name">Full Name:</label>
                        <input type="text" id="register-name" required>
                    </div>
                    <div class="input-group">
                        <label for="register-email">Email:</label>
                        <input type="email" id="register-email" required>
                    </div>
                    <div class="input-group">
                        <label for="register-password">Password:</label>
                        <input type="password" id="register-password" required minlength="6">
                    </div>
                    <div class="input-group">
                        <label for="register-confirm">Confirm Password:</label>
                        <input type="password" id="register-confirm" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Create Account</button>
                </form>
                
                <div class="auth-divider">or</div>
                
                <button onclick="userManager.signInWithGoogle()" class="btn btn-outline">
                    📧 Sign up with Google
                </button>
            </div>
            
            <div id="auth-loading" class="auth-loading" style="display: none;">
                <p>Loading...</p>
            </div>
            
            <div id="auth-error" class="auth-error" style="display: none;"></div>
        `;

        overlay.appendChild(modal);
        return overlay;
    }

    // Close login modal
    closeLoginModal() {
        const overlay = document.querySelector('.quick-advice-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    // Show authentication tab
    showAuthTab(tabName) {
        const tabs = document.querySelectorAll('.auth-tab');
        const contents = document.querySelectorAll('.auth-tab-content');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        document.querySelector(`[onclick*="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    // Handle login
    async handleLogin(event) {
        event.preventDefault();
        this.showLoading(true);
        
        if (!this.isFirebaseReady) {
            this.showError('Authentication service is not available');
            this.showLoading(false);
            return;
        }
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log('User signed in successfully');
            this.closeLoginModal();
        } catch (error) {
            console.error('Login error:', error);
            this.showError(this.getErrorMessage(error.code));
        } finally {
            this.showLoading(false);
        }
    }

    // Handle registration
    async handleRegister(event) {
        event.preventDefault();
        this.showLoading(true);
        
        if (!this.isFirebaseReady) {
            this.showError('Authentication service is not available');
            this.showLoading(false);
            return;
        }
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        
        if (password !== confirmPassword) {
            this.showError('Passwords do not match');
            this.showLoading(false);
            return;
        }
        
        try {
            console.log('Attempting to create user with email:', email);
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            console.log('User created successfully:', userCredential.user.uid);
            
            // Update user profile with display name
            await userCredential.user.updateProfile({
                displayName: name
            });
            console.log('Profile updated with display name');
            
            // Create user document in Firestore
            await this.createUserProfile(userCredential.user, { name, email });
            console.log('User profile created in Firestore');
            
            console.log('User registered successfully');
            this.closeLoginModal();
        } catch (error) {
            console.error('Registration error:', error);
            this.showError(this.getErrorMessage(error.code));
        } finally {
            this.showLoading(false);
        }
    }

    // Sign in with Google
    async signInWithGoogle() {
        this.showLoading(true);
        
        if (!this.isFirebaseReady) {
            this.showError('Authentication service is not available');
            this.showLoading(false);
            return;
        }
        
        try {
            console.log('Attempting Google sign-in...');
            const provider = new firebase.auth.GoogleAuthProvider();
            
            // Add required scopes
            provider.addScope('email');
            provider.addScope('profile');
            
            const result = await auth.signInWithPopup(provider);
            console.log('Google sign-in successful:', result.user.email);
            
            // Create or update user profile
            await this.createUserProfile(result.user, {
                name: result.user.displayName,
                email: result.user.email
            });
            
            console.log('User signed in with Google');
            this.closeLoginModal();
        } catch (error) {
            console.error('Google sign-in error:', error);
            this.showError(this.getErrorMessage(error.code));
        } finally {
            this.showLoading(false);
        }
    }

    // Reset password
    async resetPassword() {
        const email = prompt('Enter your email address to reset password:');
        if (!email) return;
        
        try {
            await auth.sendPasswordResetEmail(email);
            alert('Password reset email sent! Check your inbox.');
        } catch (error) {
            alert(this.getErrorMessage(error.code));
        }
    }

    // Sign out
    async signOut() {
        try {
            await auth.signOut();
            console.log('User signed out');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    // Create user profile in Firestore
    async createUserProfile(user, additionalData = {}) {
        const userRef = db.collection('users').doc(user.uid);
        const snapshot = await userRef.get();
        
        if (!snapshot.exists) {
            const { name, email } = additionalData;
            const createdAt = new Date();
            
            try {
                await userRef.set({
                    displayName: name || user.displayName,
                    email: email || user.email,
                    createdAt,
                    assessments: [],
                    preferences: {}
                });
            } catch (error) {
                console.error('Error creating user profile:', error);
            }
        }
    }

    // Load user profile
    async loadUserProfile() {
        if (!this.currentUser) return;
        
        try {
            const userRef = db.collection('users').doc(this.currentUser.uid);
            const snapshot = await userRef.get();
            
            if (snapshot.exists) {
                this.userProfile = snapshot.data();
                console.log('User profile loaded');
            }
        } catch (error) {
            console.error('Error loading user profile:', error);
        }
    }

    // Save assessment results
    async saveAssessment(doshaResults, gunaResults) {
        if (!this.currentUser) {
            console.log('No user logged in, cannot save assessment');
            return;
        }
        
        const assessment = {
            timestamp: new Date(),
            doshaResults,
            gunaResults,
            id: Date.now().toString()
        };
        
        try {
            const userRef = db.collection('users').doc(this.currentUser.uid);
            await userRef.update({
                assessments: firebase.firestore.FieldValue.arrayUnion(assessment)
            });
            console.log('Assessment saved successfully');
        } catch (error) {
            console.error('Error saving assessment:', error);
        }
    }

    // Get user assessments
    async getUserAssessments() {
        if (!this.currentUser) return [];
        
        try {
            const userRef = db.collection('users').doc(this.currentUser.uid);
            const snapshot = await userRef.get();
            
            if (snapshot.exists) {
                const userData = snapshot.data();
                return userData.assessments || [];
            }
        } catch (error) {
            console.error('Error getting user assessments:', error);
        }
        
        return [];
    }

    // Show loading state
    showLoading(isLoading) {
        const loadingDiv = document.getElementById('auth-loading');
        const errorDiv = document.getElementById('auth-error');
        
        if (loadingDiv) {
            loadingDiv.style.display = isLoading ? 'block' : 'none';
        }
        if (errorDiv && isLoading) {
            errorDiv.style.display = 'none';
        }
    }

    // Show error message
    showError(message) {
        const errorDiv = document.getElementById('auth-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    // Clear user data
    clearUserData() {
        this.userProfile = null;
    }

    // Get user-friendly error messages
    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/user-not-found': 'No account found with this email address.',
            'auth/wrong-password': 'Incorrect password.',
            'auth/email-already-in-use': 'An account with this email already exists.',
            'auth/weak-password': 'Password is too weak. Use at least 6 characters.',
            'auth/invalid-email': 'Invalid email address.',
            'auth/popup-closed-by-user': 'Sign-in popup was closed.',
            'auth/cancelled-popup-request': 'Sign-in was cancelled.',
            'auth/popup-blocked': 'Popup was blocked by browser. Please allow popups and try again.',
            'auth/operation-not-allowed': 'This sign-in method is not enabled. Please contact support.',
            'auth/unauthorized-domain': 'This domain is not authorized for authentication.',
            'auth/configuration-not-found': 'Firebase configuration not found. Please check setup.',
            'auth/invalid-api-key': 'Invalid API key. Please check Firebase configuration.',
            'auth/network-request-failed': 'Network error. Please check your internet connection.'
        };
        
        return errorMessages[errorCode] || `Authentication error (${errorCode}). Please try again or check Firebase setup.`;
    }
}

// Debug function to check Firebase status
function checkFirebaseStatus() {
    console.log('=== Firebase Status Check ===');
    console.log('Firebase available:', typeof firebase !== 'undefined');
    console.log('isFirebaseAvailable:', isFirebaseAvailable);
    
    if (typeof firebase !== 'undefined') {
        console.log('Firebase version:', firebase.SDK_VERSION);
        console.log('Apps initialized:', firebase.apps.length);
        
        if (firebase.apps.length > 0) {
            const app = firebase.app();
            console.log('App name:', app.name);
            console.log('App options:', app.options);
        }
    }
    
    if (isFirebaseAvailable) {
        console.log('Auth service available:', typeof auth !== 'undefined');
        console.log('Firestore service available:', typeof db !== 'undefined');
    }
    
    console.log('=== End Firebase Status ===');
}

// Initialize user manager
const userManager = new YogaTherapyUserManager();

// Check Firebase status on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        checkFirebaseStatus();
        
        // Add helpful message to UI if Firebase is not configured
        if (!isFirebaseAvailable) {
            console.warn('⚠️ Firebase is not properly configured. Authentication features will not work.');
            console.log('📖 Please see FIREBASE_SETUP.md for configuration instructions.');
            
            // Update UI to show configuration needed
            const authSection = document.getElementById('user-not-logged-in');
            if (authSection) {
                const originalHTML = authSection.innerHTML;
                authSection.innerHTML = `
                    <h4>🔧 Firebase Setup Required</h4>
                    <p>Authentication features require Firebase configuration.</p>
                    <p>See <strong>FIREBASE_SETUP.md</strong> for instructions.</p>
                    <button onclick="alert('Please follow the FIREBASE_SETUP.md guide to configure authentication.')" class="btn btn-outline">Setup Instructions</button>
                    <hr style="margin: 20px 0;">
                    ${originalHTML}
                `;
            }
        }
    }, 1000);
});

// Global functions for use in HTML
window.showLoginOptions = () => userManager.showLoginModal();
window.loadUserAssessments = () => userManager.showUserAssessments();
window.showPersonalizedDashboard = () => userManager.showDashboard();
window.signOut = () => userManager.signOut();
window.userManager = userManager;
