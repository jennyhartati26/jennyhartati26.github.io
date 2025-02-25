<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Pribadi</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        nav { background: #333; padding: 10px; text-align: center; }
        nav a { color: white; margin: 0 15px; text-decoration: none; }
        section { padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        table, th, td { border: 1px solid black; padding: 8px; }
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
        <p>Ini adalah halaman utama.</p>
    </section>
    
    <section id="tabelbiodata">
        <h2>Tabel Biodata</h2>
        <table>
            <tr>
                <th>Nama</th>
                <th>Umur</th>
                <th>Pekerjaan</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>25</td>
                <td>Web Developer</td>
            </tr>
        </table>
    </section>
    
    <section id="about">
        <h2>About Me</h2>
        <p>Saya adalah seorang pengembang web yang bersemangat dalam membuat aplikasi berbasis web.</p>
    </section>
    
    <section id="formulir">
        <h2>Formulir</h2>
        <form>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="pesan">Pesan:</label><br>
            <textarea id="pesan" name="pesan" rows="4" required></textarea><br><br>
            <button type="submit">Kirim</button>
        </form>
    </section>
    
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Telepon: 08123456789</p>
    </section>
</body>
</html>
