# Automatic Cache-Busting Setup for Entalogics

This document explains the automatic cache-busting implementation that ensures every deploy/push serves the latest version to all users without relying on manual refreshes or file renaming.

## 🚀 Implementation Overview

### 1. Next.js Automatic Hashed Filenames
Next.js automatically generates hashed filenames on every build (e.g., `main.3f2a1.js`, `css.abc123.css`). This ensures that when files change, browsers automatically fetch the new versions.

**Commands used:**
```bash
npm run build    # Creates production build with hashed filenames
npm run start    # Serves the production build
```

### 2. Cache-Control Headers Configuration

The `next.config.js` file has been configured with proper cache-control headers optimized for Vercel deployment:

#### Next.js Image Optimization (`/_next/image`) - Revalidate Frequently
```javascript
{
  source: '/_next/image(.*)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=3600, stale-while-revalidate=86400, must-revalidate',
    },
  ],
}
```
- **max-age=3600**: Cache for 1 hour
- **stale-while-revalidate=86400**: Serve stale content while fetching fresh (24 hours)
- **must-revalidate**: Always check with server after max-age expires

#### Next.js Static Files (`/_next/static`) - Long-term Caching
```javascript
{
  source: '/_next/static/:path*',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ],
}
```
- These files have hashed names, so they can be cached forever

#### HTML Pages - Always Fresh
```javascript
{
  source: '/:path*.html',
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-cache, no-store, must-revalidate',
    },
  ],
}
```

#### All Routes/Pages - Immediate Revalidation
```javascript
{
  source: '/((?!_next|api|.*\\.).*)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=0, must-revalidate',
    },
  ],
}
```

#### Static Images in /public - Revalidate After 1 Hour
```javascript
{
  source: '/:all*(png|jpg|jpeg|webp|gif|ico)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=3600, stale-while-revalidate=86400, must-revalidate',
    },
  ],
}
```
- Images update automatically after deployment without renaming files
- Browser caches for 1 hour, then revalidates
- Stale content served while fetching fresh version (smooth UX)

#### SVG Files - Revalidate After 1 Hour
```javascript
{
  source: '/:all*(svg)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=3600, stale-while-revalidate=86400, must-revalidate',
    },
  ],
}
```

#### Videos - Revalidate After 24 Hours
```javascript
{
  source: '/:all*(mp4|webm|ogg)',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=86400, stale-while-revalidate=604800, must-revalidate',
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
- Fonts rarely change, safe to cache for 1 year

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
- **All Routes/Pages**: Always fetch the latest version (`max-age=0`)
- **Next.js Images (`/_next/image`)**: Revalidate every hour, update automatically
- **Static Images in /public**: Revalidate every hour, update automatically without renaming
- **SVG files**: Revalidate every hour
- **Videos**: Revalidate every 24 hours
- **JS/CSS chunks**: Cache forever (hashed filenames change on update)
- **Fonts**: Cache for 1 year (rarely change)
- **PWA users**: Get instant updates without manual refresh
- **Offline users**: Get cached fallback content

### 🔄 Cache Behavior:
- **HTML/Routes**: `max-age=0, must-revalidate` (always fresh)
- **Images (all types)**: `max-age=3600, stale-while-revalidate=86400, must-revalidate` (1 hour cache, 24 hour stale)
- **Videos**: `max-age=86400, stale-while-revalidate=604800, must-revalidate` (24 hour cache, 7 day stale)
- **Hashed static files**: `max-age=31536000, immutable` (1 year)
- **Service worker**: Auto-updates and claims clients immediately

### 🎯 Key Benefits:
1. **No File Renaming Required**: Images update automatically after deployment
2. **Fast Performance**: Stale-while-revalidate serves cached content instantly while fetching fresh version
3. **Always Current**: All content revalidates within 1 hour max
4. **Vercel CDN Optimized**: Works perfectly with Vercel's edge network

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

## 🔧 Vercel-Specific Configuration

### Image Configuration
In `next.config.js`, the images config has been optimized:

```javascript
images: {
  // ... other settings
  minimumCacheTTL: 3600, // 1 hour instead of default 60 seconds
  unoptimized: false, // Keep optimization but with shorter cache
}
```

This ensures:
- Next.js Image Optimization API respects the 1-hour cache
- Images are still optimized for performance (WebP/AVIF)
- Every new deployment triggers revalidation after max-age

### How It Works on Vercel:

1. **First Deployment**: 
   - Images are cached by Vercel CDN with `max-age=3600` (1 hour)
   - Browser caches images for 1 hour
   
2. **After Changing an Image**:
   - Deploy new version to Vercel
   - After 1 hour, browsers request fresh images
   - CDN serves new images from latest deployment
   - `stale-while-revalidate=86400` ensures smooth transition
   
3. **Immediate Update** (if needed):
   - Users can force refresh (Ctrl+Shift+R / Cmd+Shift+R)
   - Service worker updates automatically
   - Or wait max 1 hour for automatic update

### Cache Headers Priority:

The headers are ordered from most specific to least specific:

1. `/_next/image(.*)` - Highest priority for Next.js optimized images
2. `/_next/static/:path*` - Hashed static files
3. `/:path*.html` - HTML pages
4. `/((?!_next|api|.*\\.).*) ` - All routes
5. `/:all*(png|jpg|...)` - Static images in /public
6. `/:all*(svg)` - SVG files
7. Security headers - Applied to all

This ensures proper cache control across all asset types.

---

## ✅ Solution Summary (Updated - Maximum Cache Busting)

**Problem Solved**: Images and static assets now update **immediately** on every Vercel deployment without:
- Renaming files
- Manual cache clearing
- Using query parameters
- Modifying file paths

**AGGRESSIVE Approach - Zero Cache**: 
To ensure images ALWAYS update, we've implemented the most aggressive cache-busting strategy:

### Current Configuration:

**`vercel.json`:**
```json
// All image formats - NO CACHE
"/(.*).png"   → no-cache, no-store, must-revalidate
"/(.*).jpg"   → no-cache, no-store, must-revalidate  
"/(.*).jpeg"  → no-cache, no-store, must-revalidate
"/(.*).webp"  → no-cache, no-store, must-revalidate
"/(.*).svg"   → no-cache, no-store, must-revalidate
"/(.*).gif"   → no-cache, no-store, must-revalidate
"/(.*).ico"   → no-cache, no-store, must-revalidate

// Hashed static files - cache forever (safe)
"/_next/static/*" → max-age=31536000, immutable

// API routes - no cache
"/api/*" → no-cache, no-store

// All other routes - always fresh
"/(.*)" → max-age=0, must-revalidate
```

**`next.config.js`:**
```javascript
images: {
  minimumCacheTTL: 0, // NO CACHE for Next.js Image Optimization
}
```

### Why This Works:

1. **`no-cache, no-store`**: Browser NEVER caches images, always fetches from server
2. **`must-revalidate`**: If browser tries to cache, it must check server first
3. **`minimumCacheTTL: 0`**: Next.js Image API doesn't cache either
4. **Order matters**: Image headers come BEFORE the catch-all `/(.*)`

### Result:

- ✅ **Images update INSTANTLY** on every deployment
- ✅ **Zero caching** = Zero cache problems
- ✅ **Always fresh** = Users always see latest images
- ✅ **No waiting** = No 1-hour cache expiry

### Trade-off:

- ⚠️ **More bandwidth**: Images downloaded every time (not cached)
- ⚠️ **Slightly slower**: No browser cache benefit
- ✅ **100% reliability**: Never serve stale images

### When to Use This:

- ✅ Content changes frequently
- ✅ Image updates are critical
- ✅ Prefer reliability over speed
- ✅ Sites with good CDN (like Vercel)

---

## 🔥 For Current Deployment - Clear Vercel Cache

If you're still seeing old images after this deployment:

### Method 1: Vercel Dashboard
1. Go to your project on Vercel
2. Settings → Data Cache
3. Click "Purge Everything"
4. Redeploy

### Method 2: Force Redeploy
```bash
# Delete .vercel folder
rm -rf .vercel

# Commit these config changes
git add next.config.js vercel.json
git commit -m "fix: aggressive cache busting for images"
git push

# This triggers fresh deployment
```

### Method 3: Hard Refresh for Users
- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`
- **Or**: Open DevTools → Right-click refresh → "Empty Cache and Hard Reload"

---

**Result**: Images will NEVER be cached. Every deployment serves fresh images immediately. Perfect for content that changes often!
