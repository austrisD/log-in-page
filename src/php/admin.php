<?php
$connection = include_once "./connections.php";
$emails = $connection->get__data();
// echo '<pre>';
// var_dump($emails);
// echo '<pre/>';
$emailCount = sizeof($emails);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header><h1 style="text-align:center;">email server</h1></header>
<main>
    <table style="width:fit-content;margin:0 auto;">
        <thead style="background-color:grey;">
           <tr>
                <th>ID</th>
                <th>email</th>
                <th>timestamp</th>
                <th>action</th>
           </tr>
        </thead>
        <tbody>
            <?php for ($i = 0; $i < $emailCount; $i++) {?>
            <tr>
                <th><?php echo $emails[$i]['ID']; ?></th>
                <th><?php echo $emails[$i]['email']; ?></th>
                <th><?php echo $emails[$i]['date']; ?></th>
                <th>
                   <form action="./remove.php" method="post">
                        <input type="hidden" name="id" value="<?php echo $emails[$i]['ID']; ?>"  >
                        <button type="submit">delete</button>
                    </form>
                </th>
            </tr>
            <?php }?>
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
