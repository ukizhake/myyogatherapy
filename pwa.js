// PWA Registration and Management
class YogaTherapyPWA {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.setupInstallPrompt();
    this.setupOfflineDetection();
    this.setupAppUpdateDetection();
  }

  // Register Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              this.showUpdateNotification();
            }
          });
        });
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  // Setup Install Prompt
  setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('Install prompt triggered');
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', (evt) => {
      console.log('App was installed');
      this.hideInstallButton();
      this.deferredPrompt = null;
      
      // Track installation
      if (typeof gtag !== 'undefined') {
        gtag('event', 'pwa_install', {
          'event_category': 'engagement',
          'event_label': 'yoga_therapy_app'
        });
      }
    });
  }

  // Show Install Button
  showInstallButton() {
    // Create install button if it doesn't exist
    if (!this.installButton) {
      this.installButton = document.createElement('button');
      this.installButton.id = 'install-button';
      this.installButton.className = 'btn btn-primary install-btn';
      this.installButton.innerHTML = '📱 Install App';
      this.installButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: linear-gradient(135deg, #6c5ce7, #a29bfe);
        color: white;
        border: none;
        border-radius: 25px;
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
        animation: slideIn 0.5s ease;
      `;
      
      // Add CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .install-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
        }
      `;
      document.head.appendChild(style);
      
      this.installButton.addEventListener('click', () => this.installApp());
      document.body.appendChild(this.installButton);
    }
    
    this.installButton.style.display = 'block';
  }

  // Hide Install Button
  hideInstallButton() {
    if (this.installButton) {
      this.installButton.style.display = 'none';
    }
  }

  // Install App
  async installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      this.deferredPrompt = null;
      this.hideInstallButton();
    }
  }

  // Setup Offline Detection
  setupOfflineDetection() {
    window.addEventListener('online', () => {
      this.updateOnlineStatus(true);
    });

    window.addEventListener('offline', () => {
      this.updateOnlineStatus(false);
    });

    // Initial check
    this.updateOnlineStatus(navigator.onLine);
  }

  // Update Online Status
  updateOnlineStatus(isOnline) {
    const statusElement = document.getElementById('connection-status');
    if (!statusElement) {
      const status = document.createElement('div');
      status.id = 'connection-status';
      status.style.cssText = `
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(status);
    }

    const status = document.getElementById('connection-status');
    if (isOnline) {
      status.textContent = '🟢 Online';
      status.style.background = '#00b894';
      status.style.color = 'white';
      setTimeout(() => {
        status.style.opacity = '0';
      }, 2000);
    } else {
      status.textContent = '🔴 Offline - Using cached data';
      status.style.background = '#e17055';
      status.style.color = 'white';
      status.style.opacity = '1';
    }
  }

  // Show Update Notification
  showUpdateNotification() {
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00b894, #00cec9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
        z-index: 1001;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
      ">
        <span>🔄</span>
        <span>New version available! Refresh to update.</span>
        <button onclick="this.parentElement.remove()" style="
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 12px;
        ">✕</button>
      </div>
    `;
    document.body.appendChild(notification);
  }

  // Setup App Update Detection
  setupAppUpdateDetection() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('New service worker activated');
        this.showUpdateNotification();
      });
    }
  }

  // Request Notification Permission
  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
        return true;
      }
    }
    return false;
  }

  // Send Test Notification
  sendTestNotification() {
    if ('serviceWorker' in navigator && 'Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Yoga Therapy', {
          body: 'Welcome to your personalized yoga therapy journey! 🕉️',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          vibrate: [100, 50, 100],
          tag: 'welcome-notification'
        });
      });
    }
  }

  // Get App Info
  getAppInfo() {
    return {
      isInstalled: window.matchMedia('(display-mode: standalone)').matches,
      isOnline: navigator.onLine,
      hasServiceWorker: 'serviceWorker' in navigator,
      hasNotifications: 'Notification' in window,
      notificationPermission: 'Notification' in window ? Notification.permission : 'not-supported'
    };
  }
}

// Initialize PWA when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.yogaTherapyPWA = new YogaTherapyPWA();
  
  // Add PWA info to console for debugging
  console.log('Yoga Therapy PWA Info:', window.yogaTherapyPWA.getAppInfo());
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = YogaTherapyPWA;
}
