# 🔐 Admin Dashboard - Umik's Kitchen

Admin Dashboard untuk mengelola menu dan website Umik's Kitchen.

## 🚀 Fitur Admin Dashboard

### 1. **Authentication System**
- Login dengan password
- Session management (localStorage)
- Protected routes
- Auto-redirect jika belum login

### 2. **Dashboard Overview**
- Total menu items
- Best sellers count
- Categories count
- Active cart items
- Recent menu list

### 3. **Menu Management (CRUD)**
- **Create**: Tambah menu baru
- **Read**: List semua menu dengan search & filter
- **Update**: Edit menu existing
- **Delete**: Hapus menu

### 4. **Features**
- Search menu by name
- Filter by category
- Real-time stats
- Quick actions
- Responsive design

## 🔑 Akses Admin

### URL
```
/admin
```

### Default Password
```
umikadmin123
```

⚠️ **PENTING**: Ganti password di production!

## 📂 File Structure

```
app/admin/
├── page.tsx                    # Login page
├── dashboard/
│   └── page.tsx               # Main dashboard
└── menu/
    ├── page.tsx               # Menu list (CRUD table)
    ├── add/
    │   └── page.tsx          # Add new menu
    └── edit/
        └── [id]/
            └── page.tsx      # Edit menu

context/
├── admin-context.tsx          # Auth state
└── menu-management-context.tsx # Menu CRUD operations
```

## 🎯 Cara Menggunakan

### 1. Login ke Admin
1. Buka `/admin`
2. Masukkan password: `umikadmin123`
3. Klik "Login"

### 2. Kelola Menu

#### Tambah Menu Baru
1. Dari dashboard, klik "Tambah Menu Baru"
2. Isi form:
   - Nama Menu *
   - Kategori *
   - Harga *
   - Deskripsi *
   - URL Gambar
   - Best Seller (checkbox)
3. Klik "Simpan Menu"

#### Edit Menu
1. Buka "Kelola Menu"
2. Klik icon Edit (pencil) di menu yang ingin diedit
3. Update field yang diperlukan
4. Klik "Update Menu"

#### Hapus Menu
1. Buka "Kelola Menu"
2. Klik icon Delete (trash)
3. Konfirmasi penghapusan

### 3. Logout
Klik tombol "Logout" di navbar admin

## 💾 Data Storage

### LocalStorage Keys
- `admin-auth`: Status authentication
- `admin-menu-items`: Menu items database

### Data Persistence
- Menu changes tersimpan otomatis ke localStorage
- Data tetap ada setelah refresh
- Bisa di-reset dengan clear localStorage

## 🔒 Security

### Current Implementation
- Password-based auth (client-side)
- LocalStorage session
- Protected routes dengan useEffect check

### Production Recommendations
1. **Gunakan environment variable untuk password**
   ```typescript
   const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
   ```

2. **Implement proper backend auth**
   - NextAuth.js
   - JWT tokens
   - Database user management

3. **Add rate limiting** untuk prevent brute force

4. **HTTPS only** di production

5. **Add audit logs** untuk tracking changes

## 📊 Admin Features Detail

### Dashboard Stats
| Metric | Description |
|--------|-------------|
| Total Menu | Jumlah semua menu items |
| Best Sellers | Jumlah menu yang ditandai best seller |
| Kategori | Jumlah kategori unik |
| Items in Cart | Jumlah items di cart saat ini |

### Menu Table Columns
- Nama Menu + Description
- Kategori (badge)
- Harga (formatted Rupiah)
- Status (Best Seller badge)
- Actions (Edit/Delete buttons)

## 🎨 Admin UI Components

### Navbar
- Logo + Title
- "Lihat Website" link
- Logout button

### Cards
- Stat cards dengan icons
- Quick action cards
- Menu table

### Forms
- Input fields dengan validation
- Select dropdown untuk kategori
- Checkbox untuk best seller
- URL input untuk gambar

## 🚀 Next Steps / Enhancements

### Recommended Features
- [ ] Image upload (not just URL)
- [ ] Bulk operations (delete multiple)
- [ ] Menu ordering/sorting
- [ ] Order history view
- [ ] Analytics dashboard
- [ ] Export menu to CSV/JSON
- [ ] Import menu from file
- [ ] Categories management
- [ ] User roles (admin, editor)
- [ ] Activity logs

### Backend Integration
- [ ] Connect to database (PostgreSQL/MongoDB)
- [ ] API routes untuk CRUD
- [ ] Server-side authentication
- [ ] Image storage (Cloudinary/S3)

## 🐛 Troubleshooting

### Tidak bisa login?
- Pastikan password: `umikadmin123`
- Clear browser cache & localStorage
- Refresh halaman

### Menu tidak muncul?
- Check localStorage `admin-menu-items`
- Reload halaman
- Re-import default menu

### Changes tidak tersimpan?
- Check browser console untuk errors
- Pastikan tidak ada adblocker yang block localStorage
- Try di incognito mode

## 📱 Mobile Support

Admin dashboard sudah responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔗 Links

- Dashboard: `/admin/dashboard`
- Menu List: `/admin/menu`
- Add Menu: `/admin/menu/add`
- Edit Menu: `/admin/menu/edit/[id]`

---

**Built with ❤️ for Umik's Kitchen**
