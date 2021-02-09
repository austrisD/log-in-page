<?php

$connection = include_once "./connections.php";



var_dump($_POST);
echo "<br>";
// echo preg_match($pattern  , $str);

function valid_email($str)
{
    return (preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? true : false;
}

if (!valid_email($_POST['email'])) {
    echo "Invalid email address.";
} else {
    echo "Valid email address.";
    $connection->Send__data($_POST);
}
