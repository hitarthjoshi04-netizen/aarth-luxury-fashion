# AARTH Luxury Fashion Shopify Theme

**Brand:** AARTH  
**Tagline:** Move with Meaning.  
**Founder:** Hitarth Joshi

## Overview

AAARTH is a premium luxury fashion e-commerce Shopify theme featuring:

- **Dynamic Collections:** Fully integrated Shopify product collections
- **Customizable Theme Settings:** Colors, fonts, brand text all configurable via Shopify admin
- **12 Responsive Sections:** Hero, products grid, reviews, founder bio, values, newsletter, and more
- **Luxury Design:** Dark aesthetic with gold accents, Cinzel headings, Cormorant Garamond quotes
- **Mobile Optimized:** Fully responsive across all devices
- **Liquid-Based:** Full Shopify Liquid support with dynamic content

## Setup Instructions

### 1. Install Theme to Shopify

**Option A: Using Shopify CLI (Recommended)**

```bash
# Install Shopify CLI if you haven't already
brew tap Shopify/shopify-cli/shopify-cli
brew install shopify-cli

# Navigate to theme directory
cd aarth-luxury-fashion

# Connect to your store and upload
shopify theme push --store=your-store.myshopify.com
```

**Option B: Manual Upload**

1. Go to **Shopify Admin → Sales Channels → Online Store → Themes**
2. Click **Add theme**
3. Click **Upload theme file**
4. Upload a `.zip` of this repository

### 2. Configure Theme Settings

1. Go to **Online Store → Themes**
2. Find AARTH theme, click **Customize**
3. Update in **Theme settings**:
   - Brand colors (background, text, gold accent, etc.)
   - Typography (heading, body, quote fonts)
   - Brand information (name, tagline, founder details)
   - Social media handles

### 3. Connect Products Collection

1. Create a collection in Shopify (e.g., "Summer 2026")
2. Add products to the collection
3. In **Customize → Products Grid section → Featured Collection**
4. Select your collection

### 4. Setup Newsletter

1. Go to **Settings → Customer events**
2. Enable **Customer sign-up forms**
3. Newsletter form will auto-subscribe customers

## File Structure

```
aarth-luxury-fashion/
├── config/
│   └── settings_schema.json       # Theme customization settings
├── layout/
│   └── theme.liquid              # Main template wrapper
├── sections/
│   ├── navbar.liquid
│   ├── hero.liquid
│   ├── marquee.liquid
│   ├── philosophy.liquid
│   ├── products-grid.liquid      # Dynamic product collection
│   ├── reviews.liquid
│   ├── editorial-quote.liquid
│   ├── founder.liquid
│   ├── values.liquid
│   ├── instagram.liquid
│   ├── newsletter.liquid
│   └── footer.liquid
├── assets/
│   ├── theme.css
│   └── theme.js
├── templates/
│   ├── index.json                # Homepage configuration
│   └── product.json              # Product page template
└── README.md
```

## Customization Guide

### Colors

All colors can be customized in Shopify admin:
- **Background:** `#14120f` (dark)
- **Text:** `#f5f1ea` (light cream)
- **Accent:** `#c9a86c` (gold)
- **Secondary:** `#1e1a14` (darker dark)
- **Taupe:** `#8a7d72` (muted)
- **Light:** `#f5f1ea` (cream)

### Typography

Fonts are loaded from Google Fonts:
- **Headings:** Cinzel (700 weight)
- **Quotes:** Cormorant Garamond (italic)
- **Body:** DM Sans (400, 500, 600 weights)

### Sections

Each section is editable in the Shopify theme editor:
- Drag to reorder
- Edit text, images, colors
- Add/remove blocks (reviews, values)
- No coding required

## Product Grid

The products-grid section pulls from your selected Shopify collection:
- Shows product title, details, price
- Hover reveals size selector and Add to Bag button
- Automatically syncs inventory and pricing from Shopify
- Supports up to 4 products per row (configurable)

## Development

To develop locally:

```bash
# Watch for changes and sync to store
shopify theme dev --store=your-store.myshopify.com
```

This opens a local development server at `http://localhost:9292`

## Deployment

```bash
# Push all changes to live theme
shopify theme push --store=your-store.myshopify.com --live
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Products not showing?**
- Ensure you've selected a collection in Products Grid section settings
- Verify products are published and visible in Shopify

**Colors not updating?**
- Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check that you've saved theme settings

**Newsletter not working?**
- Verify customer events are enabled in Shopify Settings
- Check email address is being captured correctly

## Support

For issues or customizations:
1. Check Shopify theme documentation: https://shopify.dev/themes
2. Review Liquid syntax: https://shopify.dev/api/liquid
3. Contact theme support

## License

Custom theme for AARTH brand. All rights reserved.

---

**Made with intention for AARTH.** ✨
