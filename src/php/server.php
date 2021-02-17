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

$isThisEmailInDatabase = $response[0]['email'] == $_POST['email'] ? true : false;
$isTermsTrue = filter_var($_POST['terms'], FILTER_VALIDATE_BOOLEAN) == false;

ob_start();
$isThisEmailInDatabase = ob_get_contents();
ob_end_clean();

if (!valid_email($_POST['email'])) {
    echo "Please provide a valid e-mail address";
    echo "<script>setTimeout(function () {window.close()}, 3000);</script>";
} elseif (columbia_email($_POST['email'])) {
    echo "We are not accepting subscriptions from Colombia emails";
    echo "<script>setTimeout(function () {window.close()}, 3000);</script>";
} elseif ($isTermsTrue) {
    echo "You must accept the terms and conditions";
    echo "<script>setTimeout(function () {window.close()}, 3000);</script>";
} elseif ($isThisEmailInDatabase) {
    echo "email already exist on database";
    echo "<script>setTimeout(function () {window.close()}, 3000);</script>";
} else {
    echo "subscription valid";
    $connection->Send__data("('" . $_POST['email'] . "')");
    echo "<script>setTimeout(function () {window.close()}, 3000);</script>";
}
