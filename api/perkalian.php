<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <link rel="stylesheet" type="text/css" target="_blank" href="../style.css" />
    <style>
        table { border-collapse: collapse; margin: 40px auto; background: #f8f9fa; }
        th, td { border: 1px solid #b0b0b0; padding: 16px 24px; text-align: center; font-size: 1.2em; cursor: pointer; }
        th { background: #7b868a; color: #fff; cursor: default; }
        tr:nth-child(even) td { background: #f1f3f4; }
        tr:nth-child(odd) td { background: #e9ecef; }
        td:hover { background: #d1e7dd; }
        .result { text-align: center; margin-top: 40px; font-size: 2em; color: #343a40; }
    </style>
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
    <table>
        <tr>
            <th>&times;</th>
            <?php for ($col = 1; $col <= 10; $col++): ?>
                <th><?php echo $col; ?></th>
            <?php endfor; ?>
        </tr>
        <?php for ($row = 1; $row <= 10; $row++): ?>
            <tr>
                <th><?php echo $row; ?></th>
                <?php for ($col = 1; $col <= 10; $col++): ?>
                    <td data-row="<?php echo $row; ?>" data-col="<?php echo $col; ?>">
                        <?php echo $row * $col; ?>
                    </td>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
    <div class="result" id="result"></div>
    <script>
        document.querySelectorAll('td[data-row][data-col]').forEach(function(cell) {
            cell.addEventListener('click', function() {
                var row = this.getAttribute('data-row');
                var col = this.getAttribute('data-col');
                var value = this.textContent;
                document.getElementById('result').innerHTML = row + ' × ' + col + ' = <b>' + value + '</b>';
            });
        });
    </script>
</body>
</html> 