<?php

$connection = include_once "./connections.php";


$emails = $connection->get__data();
echo '<pre>';
var_dump($emails);
echo '<pre/>';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header><h1>email server</h1></header>
<main>
    <table>
        <thead>
           <tr>
                <th>ID</th>
                <th>email</th>
                <th>timestamp</th>
           </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>total</th>
                <th>sort</th>
                <th>placeholder</th>
            </tr>
        </tfoot>
    </table>
</main>

</body>
</html>
