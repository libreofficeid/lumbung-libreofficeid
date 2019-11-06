---
title: "Kirim Konten"
layout: "tentang"
---

# Lumbung LibreOffice Indonesia

Lumbung LibreOffice Indonesia (Lumbung), merupakan wadah berbagi sumber daya yang berkaitan dengan LibreOffice. Untuk saat ini kami mengelompokkan sumberdaya ini ke dalam tiga kelompok:  
- Materi  
  Sumberdaya yang berisi panduan, tutorial, modul, atau sejenisnya.  
- Templat  
  Sumber daya berupa templat yang siap pakai untuk writer, calc, impress, atau yang lain.  
- Tema  
  Sumber daya berupa tema siap pakai. Kami menyediakan perkakas pembuat dan pengolah tema LibreOffice (khusunya LibreOffice versi 6.2 ke atas) yang dapat diakses melalui [tautan ini](https://github.com/raniaamina/libreoffice-theme).

## Berbagi Sumber Daya

Untuk Anda yang ingin membagikan sumber daya ke Lumbung, kami telah menyiapkan beberapa metode pengiriman sumber daya.

#### Melalui Pull Request  

Pastikan [Hugo](https://gohugo.io) sudah terpasang di komputer Anda. Selanjutnya fork & clone repositori ini ke akun Github Anda. Kemudian jalankan salah satu perintah berikut.

```bash

# Jika hendak menambah konten materi:
hugo new --kind materi 'materi/Judul Materi'

# Jika hendak menambah konten template:
hugo new --kind template 'templat/Judul Template'

# Jika hendak menambah konten tema:
hugo new --kind tema 'tema/Judul Tema'

```

Langkah selanjutnya adalah melengkapi data konten yang akan ditambahkan. Untuk melakukannya, silakan sunting berkas index.md yang terdapat pada direktori `content/materi` misalnya, untuk konten berupa materi.

Jika sudah, silakan buat commit terhadap perubahan Anda, kemudian segera ajukan Pull Request. Pastikan deskripsi commit ditulis dengan ringkas dan jelas. 

Sebelum mendorong perubahan, Anda dapat terlebih dahulu meninjau perubahan yang Anda buat dengan menjalankan Hugo.

```bash
hugo server
```

#### Melalui Formulir Google  

Untuk Anda yang belum terbiasa menggunakan perintah-perintah git, kami telah menyediakan Google Form untuk membantu Anda mengirimkan konten sumber daya yang hendak dibagikan.

Silakan merujuk pada [tautan ini](https://forms.gle/tkAaCzkDL7o1jb7j6) untuk mulai mengirim berkas Anda.

## Lisensi
Setiap berkas yang dikirimkan ke Lumbung akan dilisensikan di bawah lisensi [CC by SA 4.0 ](https://creativecommons.org/licenses/by-sa/4.0/deed.id). Apabila Anda tidak berkenan menggunakan lisensi ini, silakan cantumkan jenis lisensi CC lain yang Anda kehendaki pada bagian deskripsi konten.

## Bantuan
Apabila Anda mengalami kesulitan dalam pengiriman konten, silakan untuk melapor ke grup [Telegram LibreOffice ID](https://t.me/LibreOfficeID).

## Lain-Lain
Laman Lumbung ini masih akan disempurkan dari waktu ke waktu. Silakan berkabar kepada kami bila Anda memiliki ide atau saran untuk memperbaiki layanan ini melalui Issue Github.
