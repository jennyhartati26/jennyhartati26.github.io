<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Pribadi</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
        nav { background: #333; padding: 15px; text-align: center; }
        nav a { color: white; margin: 0 20px; text-decoration: none; font-size: 18px; }
        section { padding: 30px; background: white; margin: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        table, th, td { border: 1px solid black; padding: 10px; text-align: left; }
        form { display: flex; flex-direction: column; }
        input, textarea, button { margin-top: 10px; padding: 10px; font-size: 16px; }
        button { background: #333; color: white; border: none; cursor: pointer; }
        button:hover { background: #555; }
    </style>
</head>
<body>
    <nav>
        <a href="#home">Home</a>
        <a href="#tabelbiodata">Tabel Biodata</a>
        <a href="#about">About Me</a>
        <a href="#formulir">Formulir</a>
        <a href="#contact">Contact Us</a>
    </nav>
    
    <section id="home">
        <h1>Selamat Datang di Website Saya</h1>
        <p>Ini adalah halaman utama yang memberikan informasi singkat tentang website ini.</p>
    </section>
    
    <section id="tabelbiodata">
        <h2>Tabel Biodata</h2>
        <table>
            <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Program Studi</th>
                <th>Fakultas</th>
                <th>Universitas<th>
                <th>Umur<th>
                <th>Alamat<th>
            </tr>
            <tr>
                <td>Jenny Hartati</td>
                <td>220709092</td>
                <td>Perpustakaan dan Sains Informasi</td>
                <td>Ilmu Budaya</td>
                <td>Universitas Sumatera Utara</td>
                <td>21 Tahun</td>
                <td>Medan</td>
            <tr>
        </table>
    </section>
    
    <section id="about">
        <h2>About Me</h2>
        <p>Saya adalah seorang pengembang web yang memiliki passion dalam membuat aplikasi berbasis web dengan teknologi modern.</p>
    </section>
    
    <section id="formulir">
        <h2>Formulir</h2>
        <form>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="telepon">Telepon:</label>
            <input type="tel" id="telepon" name="telepon">
            
            <label for="pesan">Pesan:</label>
            <textarea id="pesan" name="pesan" rows="4" required></textarea>
            
            <button type="submit">Kirim</button>
        </form>
    </section>
    
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: jennyhartati9@gmail.com</p>
        <p>Telepon: 082274558654</p>
        <p>Alamat: Jl. Harmonika Baru, Medan Selayang, Kota Medan</p>
    </section>


       
        
    
            
