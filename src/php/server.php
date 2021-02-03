<?php

$connection = include_once "./connections.php";

$connection->Send__data($_POST);


var_dump($_POST);
