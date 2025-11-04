# Image Cache Fix - Production Ready Solution

## Problem
Images were not updating after Vercel deployment. Users saw old images even after deploying new ones, requiring hard refresh.

## Root Causes
1. **Browser Cache**: Browsers cached images aggressively
2. **Vercel CDN Cache**: Vercel's edge network cached images
3. **Service Worker Cache**: PWA service worker cached images with "cache-first" strategy
4. **Next.js Image Cache**: Next.js Image Optimization API cached optimized images

## Solution

### 1. Next.js Configuration (`next.config.js`)

```javascript
images: {
  minimumCacheTTL: 0, // Disable Next.js image optimization cache
}

async headers() {
  return [
    // Next.js Image Optimization - never cache
    {
      source: '/_next/image',
      headers: [
        { key: 'Cache-Control', value: 'no-store, must-revalidate' }
      ]
    },
    // Hashed static files - cache forever (safe)
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    },
    // All other routes - never cache
    {
      source: '/:path*',
      headers: [
        { key: 'Cache-Control', value: 'no-store, must-revalidate' }
      ]
    }
  ];
}
```

### 2. Vercel Configuration (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/_next/image",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, must-revalidate" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, must-revalidate" }
      ]
    }
  ]
}
```

### 3. Service Worker (`public/sw.js`)

- Changed from cache version `v1` → `v2` (forces cache refresh)
- Images: Network-first strategy (always fetch from network)
- Images: NEVER cached in service worker
- Fonts: Still cached (they rarely change)

```javascript
// Cache version updated
const CACHE_NAME = 'entalogics-v2';

// Images use network-first (not cache-first)
if (isImage(request)) {
  event.respondWith(networkFirst(request));
}

// Don't cache images
if (!isImage(request) && networkResponse.ok) {
  cache.put(request, networkResponse.clone());
}
```

## How It Works

### Cache Control Headers Explained

**`no-store, must-revalidate`:**
- `no-store`: Browser/CDN will NOT cache the response
- `must-revalidate`: If somehow cached, must validate with server first
- **Result**: Always fetches fresh content from server

**`public, max-age=31536000, immutable`:**
- Only for hashed static files (`/_next/static/*`)
- Safe to cache forever (filenames change when content changes)
- Optimal performance for JS/CSS bundles

### Request Flow

1. **User loads page** → Browser requests image
2. **Check cache headers** → Sees `no-store, must-revalidate`
3. **Fetch from server** → Always gets latest from Vercel
4. **Vercel CDN** → Forwards request to origin (doesn't serve stale)
5. **Origin** → Serves latest deployed image
6. **Result** → User sees fresh image immediately

## Deployment Steps

### Initial Setup (One Time)

1. **Clear Vercel Cache:**
   - Go to Vercel Dashboard
   - Your Project → Settings → Data Cache
   - Click "Purge Everything"

2. **Clear Service Worker** (for existing users):
   ```javascript
   // Users can run in browser console:
   navigator.serviceWorker.getRegistrations().then(regs => 
     regs.forEach(reg => reg.unregister())
   );
   ```

3. **Deploy changes:**
   ```bash
   git add next.config.js vercel.json public/sw.js
   git commit -m "fix: implement aggressive cache busting for images"
   git push
   ```

### Every Deployment

After each deployment:
1. Images update automatically ✅
2. No manual steps needed ✅
3. No file renaming required ✅

## Verification

### Check Headers in Browser:

1. Open DevTools → Network tab
2. Reload page
3. Find any image request
4. Check Response Headers:
   ```
   cache-control: no-store, must-revalidate
   ```
5. Status should be `200` (not `304 Not Modified`)

### Test Image Update:

1. Replace an image in `/public/` (keep same filename)
2. Deploy to Vercel
3. Open site (no hard refresh needed)
4. Image should show new version immediately ✅

## Performance Considerations

### What's Cached:
- ✅ JS/CSS bundles (`/_next/static/*`) - Hashed filenames, safe
- ✅ Fonts - Rarely change, cached by service worker

### What's NOT Cached:
- ❌ Images - Always fresh
- ❌ HTML pages - Always fresh
- ❌ API responses - Always fresh

### Trade-offs:

**Pros:**
- ✅ Images always update instantly
- ✅ Zero stale content issues
- ✅ No manual cache clearing needed
- ✅ Production-ready and reliable

**Cons:**
- ⚠️ Slightly more bandwidth usage (images not cached)
- ⚠️ Tiny performance impact (minimal, CDN is fast)

**Verdict:** For content that changes frequently, guaranteed freshness > minor performance gain from caching

## Troubleshooting

### Still Seeing Old Images?

1. **Hard refresh:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Check Service Worker:**
   ```javascript
   // In console:
   navigator.serviceWorker.getRegistrations().then(console.log);
   // Should show new version v2
   ```

3. **Clear all caches:**
   ```javascript
   // In console:
   caches.keys().then(keys => 
     Promise.all(keys.map(key => caches.delete(key)))
   );
   ```

4. **Verify deployment:**
   - Check Vercel deployment logs
   - Ensure new version is deployed
   - Check deployment URL directly

### Browser Still Caching?

Some browsers are aggressive. Try:
- Incognito/Private mode
- Different browser
- Mobile device
- Clear browser cache completely

## Best Practices

1. ✅ **Keep filenames same** - No need to rename on update
2. ✅ **Deploy frequently** - Changes take effect immediately
3. ✅ **Monitor performance** - Check Core Web Vitals
4. ✅ **Test before deploy** - Use Vercel preview deployments

## Additional Notes

- **Service Worker Version:** Increment version when SW logic changes
- **Vercel Edge:** Works perfectly with Vercel's global CDN
- **Next.js Image:** Optimization still works, just not cached
- **SEO:** No negative impact, search engines get fresh content

---

## Summary

✅ **Clean, production-ready solution**  
✅ **Images update instantly on every deployment**  
✅ **No file renaming or manual cache clearing needed**  
✅ **Works reliably with Vercel CDN**  
✅ **Minimal performance impact**  

**Status:** Production Ready 🎉

