# db-nodejs

## Harus Masukkan database yang bernama node_db dengan tabel siswa dan field id dengan auto_increment, nama, dan kelas
## atau bisa juga menggunakan kode berikut ini
### 
-- Buat database "node_db" jika belum ada
CREATE DATABASE IF NOT EXISTS node_db;

-- Gunakan database "node_db"
USE node_db;

-- Buat tabel "siswa" jika belum ada
CREATE TABLE IF NOT EXISTS siswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kelas VARCHAR(10)
);

-- Masukkan data ke dalam tabel "siswa"
INSERT INTO siswa (nama, kelas) VALUES
    ('jaka', 'SI5'),
    ('budi', 'SI5'),
    ('rudi', 'SI5'),
    ('ani', 'SI5'),
    ('santi', 'SI5'),
    ('wati', 'SI5'),
    ('martin', 'SI5'),
    ('ardi', 'SI5'),
    ('agus', 'SI5'),
    ('faiza', 'SI5'),
    ('siska', 'SI5'),
    ('yuni', 'SI5'),
    ('heru', 'SI5');
### 
## Kalau tidak mau ribet dengan cara mendownload dan mengimpor kode sql yang telah disediakan
    
