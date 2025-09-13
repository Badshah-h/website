# AxonStream Technologies - Enterprise Landing Page

A modern, professional SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for AxonStream Technologies - a full-service enterprise IT & AI solutions provider.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Animations**: Smooth animations with Framer Motion and CSS transitions
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, JSON-LD structured data, OpenGraph tags
- **Performance**: Optimized for Core Web Vitals (LCP < 1.5s, FCP < 1.2s)
- **Forms**: Contact form with validation using React Hook Form + Zod
- **UI Components**: ShadCN components with custom theming

## Brand Identity

- **Company**: AxonStream Technologies
- **Tagline**: Complete Enterprise IT: Software, Platforms, Hardware & Managed AI
- **Colors**: Navy (#09203f), Enterprise Blue (#1976d2), Accent Orange (#ff8a00)
- **Typography**: Inter font family for headings and body text

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with SEO meta tags
│   └── page.tsx            # Main landing page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky navigation header
│   │   └── Footer.tsx      # Footer with sitemap and contact info
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with animated background
│   │   ├── TrustLogos.tsx  # Client logos and trust indicators
│   │   ├── Services.tsx    # 6-service grid with hover animations
│   │   ├── ProductSpotlight.tsx # AxonPulse and AxientOS platforms
│   │   ├── HowItWorks.tsx  # 3-step process workflow
│   │   ├── Industries.tsx  # Industry-specific solutions
│   │   ├── CaseStudies.tsx # Success stories with metrics
│   │   ├── Pricing.tsx     # Pricing tiers and licensing models
│   │   ├── FAQ.tsx         # Accordion FAQ section
│   │   └── Contact.tsx     # Lead capture form
│   └── ui/                 # Reusable UI components (ShadCN)
└── lib/
    └── utils.ts            # Utility functions and helpers
```

## Installation & Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Key Sections

### Hero Section

- Animated network visualization with SVG
- Staggered text animations
- Primary and secondary CTAs
- Trust indicators with metrics

### Services Grid

- 6 enterprise service cards
- Hover animations with translateY and shadow effects
- Icon-based visual hierarchy
- Service-specific color coding

### Product Spotlight

- AxonPulse: Real-time orchestration platform
- AxientOS: AI business system generator
- Interactive animated visuals
- Feature highlighting with benefits

### Contact Form

- Complete lead capture form
- Form validation with Zod schema
- Industry and timeline selection
- GDPR compliance checkbox
- Success state with animation

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for non-critical components
- **Animation Performance**: GPU-accelerated transforms only
- **Bundle Size**: Tree-shaking and selective imports
- **Caching**: Static generation where possible

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS 14+, Android 10+)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast ratios 4.5:1 minimum
- Focus management and indicators
- Screen reader compatibility
- Reduced motion preferences

## SEO Features

- Server-side rendering (SSR)
- Meta tags optimization
- OpenGraph and Twitter Card tags
- JSON-LD structured data
- Canonical URLs
- XML sitemap ready
- Core Web Vitals optimization

## Deployment

The application is optimized for deployment on:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Custom Docker containers

## Contact Information

- **Email**: hello@axonstream.ai
- **Website**: https://axonstream.ai
- **Location**: Dubai, UAE

## License

All rights reserved. AxonStream Technologies © 2024
