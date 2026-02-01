# Umik's Kitchen - Modern Next.js Website

Sebuah website modern untuk bisnis catering "Umik's Kitchen" yang dibangun dengan Next.js 14, Tailwind CSS, dan fitur AI chatbot.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI inspired
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI**: Google Gemini (via Vercel AI SDK)
- **Fonts**: Playfair Display (Headings), Poppins (Body)

## 📁 Project Structure

```
umiks-kitchen/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Dynamic blog post page
│   │   └── page.tsx           # Blog listing page
│   ├── menu/
│   │   └── page.tsx           # Menu catalog with filters
│   ├── order/
│   │   └── page.tsx           # Cart & WhatsApp checkout
│   ├── tanya-ai/
│   │   └── page.tsx           # AI chatbot interface
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── why-us-section.tsx
│   │   ├── featured-menu-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── cta-section.tsx
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── menu/
│   │   └── menu-card.tsx
│   └── theme-provider.tsx
├── context/
│   └── cart-context.tsx       # Cart state management
├── actions/
│   └── chat.ts                # Server Actions for AI chat
├── data/
│   ├── menu.ts                # Menu items database
│   └── blog.ts                # Blog posts database
├── public/
│   └── images/                # Static images
├── .env.local                 # Environment variables (API keys)
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #800000 (Deep Red/Maroon)
- **Secondary**: #D72323 (Chili Red)
- **Background**: #F3E9DD (Warm Cream)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

## 🔧 Installation & Setup

1. **Clone & Install**
   ```bash
   git clone <repository-url>
   cd umiks-kitchen
   npm install
   ```

2. **Setup Environment Variables**
   
   Buat file `.env.local` dan tambahkan Google Gemini API Key:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

   Dapatkan API key dari: https://ai.google.dev/

3. **Run Development Server**
   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000)

## 📋 Features

### 1. Landing Page
- Hero section dengan CTA
- Why Us section (3 pillars)
- Featured menu carousel
- Testimonials slider
- Call-to-action section

### 2. Menu Catalog
- Search functionality
- Category filtering
- Grid layout dengan cards
- Add to cart functionality

### 3. Smart Order System
- Shopping cart management
- Customer information form
- WhatsApp integration
- Order summary & formatting

### 4. AI Chatbot (Tanya AI)
- Powered by Google Gemini
- Server Actions for API security
- Real-time streaming responses
- Chef Umik persona

### 5. Blog
- Dynamic routing (`/blog/[slug]`)
- Markdown content support
- Related posts
- Category tags

### 6. Dark Mode
- System preference detection
- Manual toggle
- Persistent theme

## 🔒 Security

- Google Gemini API key disimpan di `.env.local` (server-side only)
- Menggunakan Next.js Server Actions untuk API calls
- API key tidak pernah terexpose ke client

## 📱 WhatsApp Integration

Order akan dikirim langsung ke WhatsApp dengan format terstruktur.

## 🚀 Deployment

### Vercel (Recommended)

#### 1. Push ke GitHub
```bash
git add .
git commit -m "🚀 Ready for production with Unsplash images"
git push origin main
```

#### 2. Deploy di Vercel
1. Login ke [Vercel](https://vercel.com)
2. Import repository GitHub kamu
3. Configure Project:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Tambahkan Environment Variable:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```
5. Klik **Deploy**!

#### 3. Post-Deployment
- Vercel akan otomatis deploy setiap push ke branch `main`
- URL production: `https://your-project.vercel.app`
- Custom domain bisa ditambahkan di Project Settings

### Alternatif: Netlify

```bash
npm run build
# Deploy folder .next ke Netlify
```

## 📸 Menu Images

Website menggunakan **Unsplash API** untuk foto menu (100% FREE):
- High-quality professional food photos
- Auto-optimized dengan `w=800&q=80`
- No copyright issues
- Semua menu sudah punya foto!

## 📞 Contact

- **WhatsApp**: +62 851-4101-6579
- **Location**: Situbondo, Jawa Timur

## 📄 License

© 2026 Umik's Kitchen. All rights reserved.
