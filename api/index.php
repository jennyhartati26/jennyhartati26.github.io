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
    <section class="hero">
        <div class="hero-content">
            <h1 style="font-size: 40px;">Isi Lain dari Website Ini</h1>
            <?php
            echo "<p>Ini adalah output PHP  : hello world</p>";
            ?>
          
            <p><a href="/" target="_blank">Kembali ke Home</a></p>
            <p><a href="/api/formsubmit.php">Formulir Pengunjung</a></p>
            <p><a href="/api/perkalian.php">Perkalian</a></p>

        </div>
    </section>

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