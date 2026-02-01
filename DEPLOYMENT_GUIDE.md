# 🚀 DEPLOYMENT GUIDE - Umik's Kitchen

## ✅ STATUS: READY FOR DEPLOYMENT!

### 📋 Checklist
- ✅ All errors fixed
- ✅ All menu items have FREE Unsplash images
- ✅ Code pushed to GitHub: `jbyyy7/Umik-s-Kitchen`
- ✅ LocalStorage for cart & admin data
- ✅ Dark mode support
- ✅ WhatsApp integration
- ✅ Admin dashboard (password: `umikadmin123`)
- ✅ AI chatbot (needs API key)

---

## 🎯 STEP-BY-STEP: Deploy ke Vercel

### 1️⃣ Login ke Vercel
```
👉 Buka: https://vercel.com
👉 Login dengan GitHub account kamu
```

### 2️⃣ Import Project
```
1. Klik "Add New..." → "Project"
2. Cari repository: "Umik-s-Kitchen"
3. Klik "Import"
```

### 3️⃣ Configure Project
```
Framework Preset: Next.js (auto-detected)
Root Directory: ./
Build Command: npm run build
Output Directory: .next (auto)
Install Command: npm install
```

### 4️⃣ Environment Variables (PENTING!)

Klik "Environment Variables" dan tambahkan:

```
Name: GOOGLE_GENERATIVE_AI_API_KEY
Value: [API_KEY_KAMU]
```

**📌 Cara dapat API Key:**
1. Buka: https://makersuite.google.com/app/apikey
2. Login dengan Google
3. Klik "Create API Key"
4. Copy API key
5. Paste ke Vercel

> **⚠️ Note:** Tanpa API key, fitur AI Chatbot tidak akan jalan. Fitur lain tetap normal.

### 5️⃣ Deploy!
```
Klik tombol "Deploy"
Tunggu 2-3 menit
✨ Website live!
```

### 6️⃣ Get Your URL
```
Vercel akan kasih URL:
https://umik-s-kitchen.vercel.app

atau custom domain (optional):
https://umikcatering.com
```

---

## 🔗 Fitur Yang Sudah Siap

### ✅ Public Features:
1. **Landing Page** - Hero, Why Us, Menu, Testimonials
2. **Menu Catalog** - 17 items with Unsplash photos
3. **Search & Filter** - Real-time filtering
4. **Shopping Cart** - Add/Remove items, persist to localStorage
5. **WhatsApp Checkout** - Auto-format order to WhatsApp
6. **Blog** - 3 articles with dynamic routing
7. **AI Chatbot** - Chef Umik persona (needs API key)
8. **Dark Mode** - Toggle + system detection

### 🔒 Admin Features:
1. **Login** - Password: `umikadmin123`
2. **Dashboard** - Stats & overview
3. **Menu Management** - Create, Edit, Delete menu
4. **Live Updates** - Changes reflect instantly

---

## 📸 Photo Credits

Semua foto menu menggunakan **Unsplash** (FREE & Legal):
- License: Free untuk commercial use
- Attribution: Not required (tapi optional)
- Quality: High-resolution (800px width, optimized)

**Menu dengan foto:**
- ✅ Nasi Kotak (5 items)
- ✅ Aneka Bubur (3 items)
- ✅ Tumpeng (3 items)
- ✅ Jajanan Pasar (6 items)

---

## ⚙️ Optional: Custom Domain

### Setup Custom Domain di Vercel:
```
1. Go to Project Settings → Domains
2. Add your domain: umikcatering.com
3. Update DNS records di domain provider:
   
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
4. Wait 24-48 hours for DNS propagation
5. ✅ Done!
```

---

## 🔧 Troubleshooting

### Problem 1: Build Failed
**Error:** `Module not found`
**Solution:** 
```bash
# Delete cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Problem 2: AI Chatbot Error
**Error:** `API key not valid`
**Solution:**
- Check API key di Vercel Environment Variables
- Pastikan key dari https://makersuite.google.com/
- Redeploy project setelah add API key

### Problem 3: Images Not Loading
**Error:** Images broken
**Solution:**
- Unsplash images should load automatically
- Check internet connection
- Verify image URLs di `data/menu.ts`

### Problem 4: Admin Can't Login
**Error:** `Invalid password`
**Solution:**
- Password: `umikadmin123` (case sensitive)
- Check localStorage di browser console
- Clear browser cache if needed

---

## 📊 Performance Optimization

Vercel sudah auto-optimize:
- ✅ Image optimization (Next.js Image component ready)
- ✅ Code splitting (automatic)
- ✅ CDN global (super fast)
- ✅ HTTPS certificate (free)
- ✅ Compression (gzip/brotli)

---

## 🎉 POST-DEPLOYMENT CHECKLIST

Setelah deploy, test:
- [ ] Landing page load < 3 detik
- [ ] Menu catalog tampil semua foto
- [ ] Search & filter works
- [ ] Add to cart works
- [ ] WhatsApp link opens correctly
- [ ] Admin login works
- [ ] Admin can add/edit/delete menu
- [ ] Dark mode toggle works
- [ ] Blog posts load
- [ ] AI chatbot responds (if API key added)

---

## 📱 Update WhatsApp Number (Optional)

Current: +62 851-4101-6579

**Cara ganti:**
1. Edit file `components/layout/footer.tsx`
2. Edit file `app/order/page.tsx`
3. Search `6285141016579` dan ganti dengan nomor kamu
4. Git commit & push
5. Vercel auto-redeploy

---

## 🚀 NEXT STEPS

### Setelah Deploy:
1. ✅ Share link ke customer
2. ✅ Test semua fitur
3. ✅ Add Google Analytics (optional)
4. ✅ Setup custom domain
5. ✅ Marketing di social media!

### Future Improvements:
- [ ] Payment gateway integration (Midtrans/Xendit)
- [ ] Real database (Supabase/Firebase)
- [ ] Admin notifications (email/WhatsApp)
- [ ] Customer reviews system
- [ ] Promo/discount system
- [ ] Order tracking
- [ ] Push notifications

---

## 💡 TIPS

**Cost Optimization:**
- Vercel free tier: 100GB bandwidth/bulan (cukup untuk 10k+ visitors)
- Unsplash: Unlimited free downloads
- Google Gemini: $0 untuk 15 requests/menit (free tier)

**Marketing Ideas:**
1. Share link di WhatsApp Status
2. Instagram bio link
3. Google Business Profile
4. Facebook Marketplace
5. Grab/Gojek merchant bio

---

## 📞 Support

Kalau ada masalah saat deploy:
1. Check Vercel build logs
2. Test locally: `npm run build`
3. Check environment variables
4. Clear cache & redeploy

---

## 🎊 CONGRATULATIONS!

Website Umik's Kitchen sudah LIVE! 🚀

**Your website:** https://umik-s-kitchen.vercel.app

Sekarang tinggal marketing dan terima order! 💪

---

*Deployment Date: February 1, 2026*  
*Stack: Next.js 14 + Vercel + Unsplash*  
*Status: ✅ PRODUCTION READY*
