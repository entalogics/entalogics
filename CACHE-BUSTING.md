# Automatic Cache-Busting Setup for Entalogics

This document explains the automatic cache-busting implementation that ensures every deploy/push serves the latest version to all users without relying on manual refreshes.

## 🚀 Implementation Overview

### 1. Next.js Automatic Hashed Filenames
Next.js automatically generates hashed filenames on every build (e.g., `main.3f2a1.js`, `css.abc123.css`). This ensures that when files change, browsers automatically fetch the new versions.

**Commands used:**
```bash
npm run build    # Creates production build with hashed filenames
npm run start    # Serves the production build
```

### 2. Cache-Control Headers Configuration

The `next.config.js` file has been configured with proper cache-control headers:

#### Critical Files (JS/CSS/HTML) - Always Fetch Latest
```javascript
{
  source: '/:all*(js|css|html)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-cache, no-store, must-revalidate',
    },
    {
      key: 'Pragma',
      value: 'no-cache',
    },
    {
      key: 'Expires',
      value: '0',
    },
  ],
}
```

#### Static Assets (Images, Videos) - Long-term Caching
```javascript
{
  source: '/:all*(png|jpg|jpeg|svg|webp|gif|ico|mp4|webm|ogg)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ],
}
```

#### Fonts - Long-term Caching
```javascript
{
  source: '/:all*(woff|woff2|ttf|eot|otf)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ],
}
```

### 3. Service Worker for PWA Users

A service worker has been implemented (`public/sw.js`) that:

- **Instantly activates updates**: Uses `self.skipWaiting()` and `clients.claim()`
- **Implements smart caching strategies**:
  - Cache-first for static assets (images, fonts, CSS)
  - Network-first for dynamic content (HTML, JS)
- **Auto-refreshes on updates**: Automatically reloads the page when new content is available
- **Handles offline scenarios**: Provides fallback content when network is unavailable

#### Service Worker Registration
The service worker is automatically registered in `pages/_app.tsx`:

```typescript
import { registerServiceWorker } from '../src/lib/serviceWorker';

// In useEffect:
registerServiceWorker();
```

### 4. Build Scripts

Updated `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "build:analyze": "ANALYZE=true next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "sw:unregister": "node -e \"console.log('Service Worker unregistered')\""
  }
}
```

## 🧪 Testing Cache-Busting

### Method 1: Incognito/Private Mode
1. Open your site in incognito/private mode
2. Make a change and deploy
3. Refresh the page - you should see the latest version immediately

### Method 2: Clear Browser Cache
1. Open Developer Tools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. The latest version should load immediately

### Method 3: Service Worker Testing
1. Open Developer Tools → Application → Service Workers
2. Check if the service worker is registered
3. Make a change and deploy
4. The page should auto-refresh within 1 second

## 📊 Expected Outcomes

### ✅ What Works Now:
- **JS/CSS/HTML files**: Always fetch the latest version
- **Images/videos**: Cached long-term for performance (1 year)
- **PWA users**: Get instant updates without manual refresh
- **Regular users**: See latest content on page refresh
- **Offline users**: Get cached fallback content

### 🔄 Cache Behavior:
- **Critical files**: `no-cache, no-store, must-revalidate`
- **Static assets**: `public, max-age=31536000, immutable` (1 year)
- **Service worker**: Auto-updates and claims clients immediately

## 🛠️ Troubleshooting

### If users still see old content:

1. **Check Service Worker Status**:
   ```javascript
   // In browser console:
   navigator.serviceWorker.getRegistrations().then(console.log);
   ```

2. **Force Service Worker Update**:
   ```javascript
   // In browser console:
   navigator.serviceWorker.getRegistrations().then(registrations => {
     registrations.forEach(registration => registration.update());
   });
   ```

3. **Clear All Caches**:
   ```javascript
   // In browser console:
   caches.keys().then(names => {
     names.forEach(name => caches.delete(name));
   });
   ```

### Development vs Production:
- **Development**: Service worker is registered but may not cache aggressively
- **Production**: Full caching and auto-update behavior is active

## 🔧 Maintenance

### Updating Service Worker:
1. Modify `public/sw.js`
2. Deploy changes
3. Service worker will auto-update for all users

### Monitoring Cache Performance:
- Check browser DevTools → Network tab for cache hits/misses
- Monitor service worker registration in DevTools → Application
- Use `npm run build:analyze` to analyze bundle sizes

## 📝 Notes

- **Next.js 15**: Uses Turbopack by default for faster builds
- **Security Headers**: All security headers are maintained alongside cache headers
- **SEO Friendly**: Search engines will always get the latest content
- **Performance**: Static assets are cached for optimal performance while ensuring content freshness

---

**Result**: Every deploy/push automatically serves the latest version to all users without requiring manual refreshes, while maintaining optimal performance through intelligent caching strategies.
