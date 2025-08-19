# 🔥 Firebase Setup Guide for Yoga Therapy App

## Step 1: Create Firebase Project

1. **Go to Firebase Console:**
   - Visit [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Sign in with your Google account

2. **Create New Project:**
   - Click "Create a project"
   - Enter project name: `yoga-therapy-app` (or your preferred name)
   - Choose whether to enable Google Analytics (optional)
   - Click "Create project"

## Step 2: Set Up Authentication

1. **Enable Authentication:**
   - In your project dashboard, click "Authentication" in the left sidebar
   - Click "Get started"

2. **Configure Sign-in Methods:**
   - Go to "Sign-in method" tab
   - Enable "Email/Password":
     - Click on "Email/Password"
     - Toggle "Enable" on
     - Click "Save"
   
   - Enable "Google":
     - Click on "Google"
     - Toggle "Enable" on
     - Select your project support email
     - Click "Save"

## Step 3: Set Up Firestore Database

1. **Create Firestore Database:**
   - Click "Firestore Database" in the left sidebar
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location close to your users
   - Click "Done"

2. **Configure Security Rules:**
   - Go to "Rules" tab in Firestore
   - Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 4: Get Your Firebase Configuration

1. **Add Web App:**
   - In project dashboard, click the web icon `</>`
   - Enter app nickname: "Yoga Therapy Web App"
   - Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"

2. **Copy Configuration:**
   - Copy the firebaseConfig object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345"
};
```

## Step 5: Update Your App Configuration

1. **Edit firebase_auth.js:**
   - Open `firebase_auth.js` in your project
   - Replace the demo configuration (lines 4-13) with your actual config:

```javascript
const firebaseConfig = {
    // Replace with YOUR actual Firebase project config
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Step 6: Test Authentication

1. **Test Account Creation:**
   - Refresh your app at `http://localhost:8000`
   - Click "Sign In / Create Account"
   - Try creating a new account
   - Check Firebase Console > Authentication > Users to see if the user was created

2. **Test Google Sign-In:**
   - Click "Sign in with Google"
   - Complete the Google authentication flow
   - Verify the user appears in Firebase Console

## Step 7: Verify Data Storage

1. **Complete an Assessment:**
   - After signing in, complete the dosha and guna assessment
   - Check Firebase Console > Firestore Database
   - You should see a `users` collection with your user document
   - The document should contain your assessment results

## Troubleshooting

### Common Issues:

1. **"Firebase not available" error:**
   - Make sure you've replaced the demo config with your actual Firebase config
   - Check browser console for specific error messages

2. **Google Sign-in not working:**
   - Ensure Google sign-in is enabled in Firebase Console
   - Make sure your domain is authorized (localhost should work by default)

3. **Account creation fails:**
   - Check if the email is already in use
   - Ensure password is at least 6 characters
   - Check browser console for detailed error messages

4. **Permission denied errors:**
   - Verify Firestore security rules are set correctly
   - Make sure user is authenticated before trying to save data

### Debug Steps:

1. **Open Browser Developer Tools:**
   - Press F12 or right-click → "Inspect"
   - Go to "Console" tab
   - Look for error messages when trying to authenticate

2. **Check Firebase Console:**
   - Go to Authentication tab to see if users are being created
   - Go to Firestore tab to see if data is being saved

3. **Test with Different Browsers:**
   - Try incognito/private mode
   - Try a different browser
   - Clear browser cache and cookies

## Security Notes

- The demo configuration won't work - you MUST use your own Firebase project
- Test mode Firestore rules are permissive - tighten them for production
- Consider adding email verification for production use
- Monitor usage in Firebase Console to stay within free tier limits

## Support

If you continue having issues:
1. Check the browser console for specific error messages
2. Verify your Firebase configuration matches exactly
3. Ensure all Firebase services are enabled in your project
4. Try creating a simple test user manually in Firebase Console

## Free Tier Limits

Firebase free tier includes:
- 50,000 reads/month for Firestore
- 20,000 writes/month for Firestore
- 10,000 authentications/month
- This is usually sufficient for personal/small projects
