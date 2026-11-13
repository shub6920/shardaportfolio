# Sharda Thakur — Personal Portfolio Website

A bespoke, production-ready personal portfolio website for **Sharda Thakur**, an Electronics and Communication Engineering student (B.Tech, 2022–2026) specializing in Artificial Intelligence and Machine Learning.

---

## 🚀 Live Demo & Repository
- **Target URL**: [https://shardathakur.vercel.app/](https://shardathakur.vercel.app/)
- **GitHub**: [https://github.com/thakursharda2007](https://github.com/thakursharda2007)
- **LinkedIn**: [https://www.linkedin.com/in/sharda-thakur-14907a374/](https://www.linkedin.com/in/sharda-thakur-14907a374/)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 18 + Vite 6 + TypeScript (Strict mode)
- **Styling**: Tailwind CSS (Custom dark theme with `#080916` background and `#8955FF` electric purple accents)
- **Motion & Interactions**: Framer Motion (Scroll reveals, staggered cards, smooth modals, respects `prefers-reduced-motion`)
- **Icons**: Lucide React & React Icons (`react-icons/si`, `react-icons/fa`, `react-icons/md`)
- **Data Visualizations**: Recharts (for academic performance distribution)
- **Contact Handling**: EmailJS (`@emailjs/browser`) with client-side validation, spam honeypot, and mailto fallback
- **Typography**: Plus Jakarta Sans via Google Fonts

---

## 📂 Project Structure

```
sharda-portfolio/
├── public/
│   ├── images/
│   │   ├── sharda.jpg              # Original hero portrait
│   │   └── sharda.webp             # Optimized modern WebP hero portrait
│   ├── Sharda_Thakur_Resume.pdf    # Authentic resume PDF
│   ├── robots.txt                  # Search engine crawling rules
│   └── sitemap.xml                 # SEO sitemap
├── src/
│   ├── assets/                     # Static media assets
│   ├── components/                 # Reusable UI components
│   │   ├── BackgroundOrbs.tsx      # Ambient glowing gradient orbs & dot grid
│   │   ├── Navbar.tsx              # Glassmorphic header with active section tracking
│   │   ├── ProjectArt.tsx          # Custom SVG/CSS project illustrations
│   │   ├── ProjectModal.tsx        # Accessible details modal (Esc to close, focus trap)
│   │   └── Toast.tsx               # Feedback notifications
│   ├── data/
│   │   └── portfolio.ts            # Centralized typed content single-source-of-truth
│   ├── hooks/
│   │   └── useActiveSection.ts     # IntersectionObserver hook for navbar tracking
│   ├── sections/                   # High-level page sections
│   │   ├── Hero.tsx                # Hero section with portrait, bio, CTAs, badges
│   │   ├── About.tsx               # Background, interests, animated counters, timeline
│   │   ├── Skills.tsx              # 4 categorized technical skill glass cards
│   │   ├── Experience.tsx          # Vertical progress timeline (NIT Hamirpur, Ocean Tech)
│   │   ├── Projects.tsx            # Project showcase with modal & GitHub links
│   │   ├── Achievements.tsx        # Leadership & honor cards
│   │   ├── Contact.tsx             # Working form with EmailJS & direct details
│   │   └── Footer.tsx              # Copyright, back-to-top, social links
│   ├── App.tsx                     # Main app composition
│   ├── index.css                   # Global styles, glassmorphism & typography
│   └── main.tsx                    # React DOM entry point
├── .env.example                    # EmailJS environment variable template
├── index.html                      # HTML5 entry with meta SEO & Open Graph
├── tailwind.config.js              # Custom tokens & animations
├── tsconfig.json                   # Strict TypeScript compiler options
├── vercel.json                     # Vercel SPA routing rewrites
└── vite.config.ts                  # Vite build configuration
```

---

## 📧 EmailJS Setup Guide

To enable automated contact form delivery to your inbox:

1. **Create an EmailJS Account**: Sign up for free at [emailjs.com](https://www.emailjs.com/).
2. **Add an Email Service**:
   - Go to **Email Services** > **Add New Service** (e.g., Gmail).
   - Connect your email (`thakursharda2007@gmail.com`).
   - Copy the **Service ID** (e.g. `service_abc123`).
3. **Create an Email Template**:
   - Go to **Email Templates** > **Create New Template**.
   - Set Subject: `New Message from Portfolio: {{subject}}`.
   - Set Content:
     ```
     You have received a new message from {{from_name}} ({{from_email}}):

     Subject: {{subject}}

     Message:
     {{message}}
     ```
   - Copy the **Template ID** (e.g. `template_xyz789`).
4. **Get Public API Key**:
   - Go to **Account** > **General** > **Public Key**.
5. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in the values:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   *(Note: If environment variables are omitted, the form automatically falls back to launch the user's default email client prefilled via mailto.)*

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Type-Check & Production Build**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## ☁️ Vercel Deployment

Deploying to Vercel takes less than a minute:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Sharda Thakur"
   git branch -M main
   git remote add origin https://github.com/thakursharda2007/portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. In **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Vercel will build and serve the application globally with SSL and edge caching.
