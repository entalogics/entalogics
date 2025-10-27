// Service Worker Registration Script
// This ensures the service worker is registered and updated properly

export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  console.log('New content available. Please refresh.');
                  
                  // Auto-refresh after 1 second
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
      
      // Listen for service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed');
        window.location.reload();
      });
    });
  }
};

// Unregister service worker (for development)
export const unregisterServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
        console.log('Service Worker unregistered');
      });
    });
  }
};
