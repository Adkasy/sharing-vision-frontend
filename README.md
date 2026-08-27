# Sharing Vision (Frontend)

Frontend untuk pengelolaan artikel (All Posts, Add New, Edit, Preview), dibuat untuk technical test Sharing Vision. Terhubung ke [sharing-vision-backend](https://github.com/Adkasy/sharing-vision-backend).

**Live:** https://sharing-vision-frontend-red.vercel.app/

## Tech Stack

- React + Vite
- React Router (`react-router-dom`)
- Axios
- `lucide-react` untuk icon
- Hosting: [Vercel](https://vercel.com)

## Cara Menjalankan (Local)

1. Clone repo ini dan masuk ke foldernya:

   ```bash
   git clone https://github.com/Adkasy/sharing-vision-frontend.git
   cd sharing-vision-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` di root folder, isi dengan URL backend:

   ```
   VITE_API_URL=http://localhost:3000
   ```

   Ganti dengan URL backend production kalau backend sudah di-deploy (lihat Live URL di README backend).

   Pastikan backend ([sharing-vision-backend](https://github.com/Adkasy/sharing-vision-backend)) sudah berjalan terlebih dahulu sebelum menjalankan frontend, supaya data bisa ke-load.

4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

## Halaman

| Route       | Deskripsi                                                     |
| ----------- | ------------------------------------------------------------- |
| `/`         | All Posts — tabel artikel dengan tab Publish / Draft / Thrash |
| `/add-new`  | Form membuat artikel baru                                     |
| `/edit/:id` | Form edit artikel (title, content, category)                  |
| `/preview`  | Daftar artikel dengan status Publish, dengan pagination       |
