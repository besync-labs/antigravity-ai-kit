# Google Search Console Setup Guide

> **Goal**: Get your Antigravity AI Kit documentation indexed by Google for better search visibility.

---

## Step 1: Add Your Site

1. Go to [Google Search Console](https://search.google.com/search-console/welcome)
2. Select **URL prefix** method
3. Enter: `https://besync-labs.github.io/antigravity-ai-kit/`
4. Click **Continue**

---

## Step 2: Verify Ownership

### Option A: HTML Meta Tag (Recommended)

1. Google will provide a meta tag like:

   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```

2. Add this to `mkdocs.yml` under `extra.meta`:

   ```yaml
   extra:
     meta:
       - name: google-site-verification
         content: YOUR_VERIFICATION_CODE
   ```

3. Commit and push to trigger GitHub Actions deployment
4. Once deployed, click **Verify** in Google Search Console

---

## Step 3: Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

The sitemap URL is:

```
https://besync-labs.github.io/antigravity-ai-kit/sitemap.xml
```

---

## Step 4: Monitor Performance

After a few days, check:

- **Performance** tab for search impressions and clicks
- **Coverage** tab for indexing status
- **Enhancements** for any issues

---

## Verification Checklist

- [ ] Site added to Search Console
- [ ] Ownership verified via meta tag
- [ ] Sitemap submitted
- [ ] Wait 24-48 hours for initial indexing

---

> **Tip**: Google typically indexes GitHub Pages sites within 1-2 weeks. Use the **URL Inspection** tool to request faster indexing for specific pages.
