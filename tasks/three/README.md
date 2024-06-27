# Tugas Level 3

Bismillah,

Berikut submisi tugas implementasi desain website ana:

## Poin acceptance criteria

- [x] Inisiasi source code menggunakan create-next-app.
- [x] Ikuti desain yang telah disediakan. Desain dapat diakses di https://www.figma.com/file/UANQAorcML15SDiv7eoXcr/Blog-(Community).
- [x] Gunakan API yang sudah disediakan di bawah ini
  - [x] https://hsi-sandbox.vercel.app/api/articles
  - [x] https://hsi-sandbox.vercel.app/api/articles/:slug
- [x] Technical requirement untuk Home Page
  - [x] Gunakan server-side rendering untuk menampilkan 4 artikel pertama, baik terurut berdasarkan yang terbaru maupun yang terpopuler.
  - [x] Gunakan client-side data fetching untuk menambahkan 4 artikel setelah user mengklik tombol Load More.
- [x] Url untuk mengakses Detail Page adalah /:slug. Tampilkan 404 Page jika slug tidak dikenal oleh Article Detail API (http status code sama dengan 404). Tampilkan Detail Page jika slug dikenal oleh Article Detail API (http status code sama dengan 200). Detail Page memiliki Related Section yang menampilkan list artikel yang memiliki kategori yang sama dengan kategori artikel dari slug. User diarahkan ke Detail Page setelah user mengklik judul dari salah satu artikel yang ditampilkan pada Related Section. User diarahkan ke Related Page setelah user mengklik tombol More pada Related Section.
- [ ] Technical requirement untuk Detail Page (Belum bisa diimplementasikan)
  - [ ] Gunakan static generation untuk menampilkan artikel.
  - [ ] Gunakan client-side data fetching untuk menampilkan list artikel yang memiliki kategori yang sama.
- [x] Url untuk mengakses Related Page adalah /:slug/relates. Tampilkan 404 Page jika slug tidak dikenal oleh Article Detail API (http status code sama dengan 404). Tampilkan Related Page jika slug dikenal oleh Article Detail API (http status code sama dengan 200). Tampilkan 4 artikel yang memiliki kategori yang sama dengan kategori artikel dari slug. Artikel yang ditampilkan bertambah 4 setelah user mengklik tombol Load More. Tombol Load More menghilang saat tidak ada sisa artikel yang bisa ditambahkan. User diarahkan ke Detail Page setelah user mengklik judul dari salah satu artikel yang ditampilkan.
- [x] Technical requirement untuk Related Page
  - [x] Gunakan server-side rendering untuk menampilkan artikel dan 4 artikel yang memiliki kategori yang sama.
  - [x] Gunakan client-side data fetching untuk menambahkan 4 artikel setelah user mengklik tombol Load More.

## Hasil pengerjaan

- [Source code](https://gitlab.com/yusoofsh/snbxhsiid/-/tree/dac4c4bb9ac97b92166855f104bbd788b0073bd9/tasks/three)

![Tampilan demo](./demo.mp4)

---

Sekian. Jazaakallaahu khairan katsiran.
