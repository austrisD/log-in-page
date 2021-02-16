<?php

$connection = include_once "./connections.php";
$response = [0 => ['email' => false]];

function valid_email($str)
{
    return (preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", htmlspecialchars($str))) ? true : false;
}

function columbia_email($str)
{
    return (preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+(co)$/ix", htmlspecialchars($str))) ? true : false;
}

$statement = "WHERE `email` LIKE '" . $_POST['email'] . "'";
$response = $connection->custom__data($statement);

// if ($connection->custom__data($statement) == null) {
//     $counter = 1;
//     while ($counter <= 10) {
//         sleep(1); //1second
//         echo "attempts to get response to server: " . $counter;
//         var_dump(count($connection->custom__data($statement)));
//         echo "<br>";
//         echo '<pre>';
//         var_dump($response);
//         echo '<pre/>';
//         if (false) {
//             echo "connected";
//             break;
//         }
//         if ($counter == 10) {
//             echo "failed to connect to server";
//             exit();
//         }
//         $counter++;
//     }
// }
// $counter = 1;
// while ($response[0]['email'] == null){
//     sleep(0.1); //1second
//     echo "attempts to get response to server: " . $counter;
//     echo '<pre>';
//     var_dump($response);
//     echo '<pre/>';
//     if($counter == 10 ){break;}
//     $counter++;
// }


$isThisEmailInDatabase = $response[0]['email'] == $_POST['email'] ? true : false;
$isTermsTrue = filter_var($_POST['terms'], FILTER_VALIDATE_BOOLEAN) == false;

ob_start();
$isThisEmailInDatabase = ob_get_contents();
ob_end_clean();



if (!valid_email($_POST['email'])) {
    echo "Please provide a valid e-mail address";
} elseif (columbia_email($_POST['email'])) {
    echo "We are not accepting subscriptions from Colombia emails";
} elseif ($isTermsTrue) {
    echo "You must accept the terms and conditions";
} elseif ($isThisEmailInDatabase) {
    echo "email already exist on database";
} else {
    echo "subscription valid";
    $connection->Send__data("('" . $_POST['email'] . "')");
    echo "<script>window.close();</script>";
}
