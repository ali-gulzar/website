# Speechory Website

A modern, responsive website for Speechory - an AI phone call agents platform. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI inspired by userlens.io color scheme
- 📱 Fully responsive design
- ⚡ Next.js 14 with App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section with demo call
│   ├── VoiceDemo.tsx    # Voice AI demo player
│   ├── Features.tsx     # Features and use cases
│   ├── HowItWorks.tsx   # How it works steps
│   ├── Languages.tsx    # Languages support
│   ├── Integrations.tsx # Integrations showcase
│   ├── Industries.tsx   # Industry solutions
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Security.tsx     # Security & compliance
│   ├── Pricing.tsx      # Pricing plans
│   ├── FAQ.tsx          # FAQ accordion
│   ├── CTA.tsx          # Call to action
│   ├── Newsletter.tsx   # Newsletter signup
│   ├── Footer.tsx       # Site footer
│   └── index.ts         # Component exports
└── lib/
    └── utils.ts         # Utility functions
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`. The current theme uses:

- **Primary**: Indigo (#6366F1)
- **Accent**: Green (#22C55E)
- **Neutral**: Gray scale

### Fonts

The site uses Inter font family. To change fonts, update the `globals.css` import and `tailwind.config.ts`.

## Deployment

Build for production:

```bash
npm run build
```

The site can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting

## License

MIT License

