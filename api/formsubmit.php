<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP Page</title>
    <link rel="stylesheet" type="text/css" target="_blank" href="../style.css" />
</head>

<body>
    <nav>
        <div class="logo">
            <h1>📚LIBRARY</h1>
        </div>
        <ul>
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li>
                <a href="/book-list.html">Book List</a>
            </li>
            <li>
                <a href="/about-me.html">About Me</a>
            </li>
            <li>
                <a href="get-intouch.html">Get In Touch</a>
            </li>
            <li>
                <a href="event.html">Event</a>
            </li>
            <li>
                <a href="/api/index.php">PHP Page</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </nav>

    <div class="container-buku">
        <div class="container-title">
            <h1 class="title">Formulir Pengunjung</h1>
            <p class="subtitle" style="margin-top: 10px;">Harap isi formulir dibawah untuk mendata pengunjung website
                ini</p>
        </div>
         <!-- Formulir Pengunjung -->
         <div class="form-wrapper">
            <form action="https://formsubmit.co/jennyhartati9@gmail.com" method="post" style="width:100%; display: flex; justify-content: center; align-items: center;">
                <table class="form-table">
                    <tr>
                        <td>Nama</td>
                        <td><input type="text" name="nama" required></td>
                    </tr>
                    <tr>
                        <td>NIP/NIM</td>
                        <td><input type="text" name="nipnim" required></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="email" required></td>
                    </tr>
                    <tr>
                        <td>Telepon</td>
                        <td><input type="text" name="telepon" required></td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>
                            <select name="jenis_kelamin" required>
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td><input type="text" name="alamat" required></td>
                    </tr>
                    <tr>
                        <td>Jenis Pengunjung</td>
                        <td>
                            <select name="jenis_pengunjung" required>
                                <option value="">Pilih Jenis Pengunjung</option>
                                <option value="Mahasiswa">Mahasiswa</option>
                                <option value="Dosen">Dosen</option>
                                <option value="Umum">Umum</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align:center; background:#f8fafc;">
                            <button type="submit">Kirim Data</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <!-- End Formulir Pengunjung -->
       
       

    </div>

    <!-- Footer -->
    <div class="footer">
        <div class="item-footer">
            <h1>Email</h1>
            <div class="data-footer">
                <div><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6A938X2F3kMW50WVmJZtngHfx8eBXFL-w&s"
                        class="logo-footer"></div>
                <p>jennyhartati9@gmail.com</p>
            </div>
        </div>
        <div class="item-footer">
            <h1>No Handphone</h1>
            <div class="data-footer">
                <div><img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-1020x1024-iykox85t.png"
                        class="logo-footer"></div>
                <p>082274558654</p>
            </div>
        </div>
        <div class="item-footer">
            <h1>Alamat</h1>
            <div class="data-footer">
                <div><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png"
                        class="logo-footer"></div>
                <p>Jl. Harmonika Baru,<br>Medan Selayang, Kota Medan</p>
            </div>
        </div>
    </div>

    <div class="bottom">
        <p>@2025 My Library Website</p>
    </div>
</body>

</html>