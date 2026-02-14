

# DHYANAM — Premium Digital Tools Marketplace

## Overview
A modern, animated SaaS-style marketplace website for selling digital tools and lifetime deals. Dark theme with purple/blue gradients, glassmorphism cards, and smooth animations throughout.

---

## Pages & Routing (SPA)

### 1. Homepage (`/`)
- **Animated Hero Section** — "Premium Digital Tools. One Place." headline with floating background shapes, gradient glow, and a prominent "Explore Products" CTA button
- **Featured Products** — Grid of top product cards (Grammarly, Canva, ChatGPT, etc.) with glassmorphism styling and hover animations
- **All Products Section** — Full animated card grid of all 9 individual products
- **ALL-IN-ONE Bundle Section** — Highlighted special section showcasing the Ultimate Digital Growth Toolkit with the full list of 30+ included tools in an icon grid, plus the "Under-Testing Tools" disclaimer section
- **Footer** — DHYANAM branding, links, and Telegram CTA

### 2. Products List Page (`/products`)
- Filterable/browsable grid of all 9 products
- Animated card entrance on scroll
- Each card links to its detail page

### 3. Individual Product Pages (`/products/:slug`)
- Product logo, title, and short description
- Features list with icons
- Stock badge with animated "Only X left" effect (for limited items like Grammarly)
- **"Buy Now" button → opens https://t.me/dhyanam in new tab**
- Related products carousel at the bottom
- Smooth fade-in animations on load

### 4. All-In-One Bundle Page (`/all-in-one`)
- Hero section: "Ultimate Digital Growth Toolkit – Lifetime Access"
- Icon grid of all 30+ included tools (Ahrefs, Semrush, Canva, etc.)
- Under-Testing tools section with disclaimer
- **"Buy Now" button → opens https://t.me/dhyanam in new tab**

---

## Design System
- **Theme**: Dark background with purple/blue gradient glows
- **Cards**: Glassmorphism (frosted glass effect with backdrop blur)
- **Typography**: Inter font, clean and premium
- **Animations**: Fade-ins, scale effects, floating shapes, button glow on hover, micro-interactions
- **Responsive**: Mobile-first, adapts to tablet and desktop

## UI Components
- Modern sticky navbar with smooth scroll and page navigation
- Glowing CTA buttons with hover effects
- Animated stock/limited badges
- Floating gradient background shapes
- Product cards with hover lift and glow effects
- "Add to list" animation interaction

## Products (9 Individual + 1 Bundle)
All 9 products with unique icons, descriptions, and feature lists. Each with its own detail page. The ALL-IN-ONE bundle as a special highlighted section/page.

## Key Rules
- Every "Buy Now" button links to `https://t.me/dhyanam` (opens in new tab)
- Clean, modular code structure ready for adding future products via a simple data file
- SEO-friendly semantic HTML structure
- Fast loading with optimized animations

