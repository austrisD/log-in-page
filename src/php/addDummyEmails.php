<?php

if (isset($_POST["create"])) {
    $serverName = "localhost";
    $username = "root";
    $password = "";

    $connection = new PDO("mysql:host=$serverName", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sqlStatement =
        "DROP SCHEMA IF EXISTS email_server;
    CREATE SCHEMA email_server;
    USE email_server;
    CREATE TABLE email_server ( `ID` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(60) NOT NULL , `date` DATETIME NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;  ";
    try {
        $connection->exec($sqlStatement);
        echo "<br>database created";

    } catch (PDOException $error) {
        echo "<br>" . $error->getMessage();
    }
    $connection = null;
    $_POST = array();
}

if (isset($_POST['statement'])) {
    $statement = "('user1@email.com')
,      ('janis2@gmail.com')
,      ('kristaps3@gmail.com')
,      ('jon4@Yahoo.com')
,      ('tyron76@Yahoo.com')
,      ('chad69@gmail.com')
,      ('moustusednmae3@gmail.com')
,      ('yupiter@Yahoo.com')
,      ('anybody@Yahoo.com')
,      ('outher@inbox.lv')
,      ('mister@inbox.lv')
,      ('drdolitle@Outlook.com')
,      ('user666@Outlook.com');";
    $connection = include_once "./connections.php";

    echo "fake emails added to server";
    $connection->Send__data($statement);
    $_POST = array();
}
?>
<form action="./addDummyEmails.php" method="post">
    <input type="hidden" name="create" value="true"  >
    <button type="submit">create database delete if exist</button>
</form>

<form action="./addDummyEmails.php" method="post">
    <input type="hidden" name="statement" value="true"  >
    <button type="submit">addd dummy emails</button>
</form>
<!-- "CREATE TABLE `email_server`( `ID` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(60) NOT NULL , `date` DATETIME NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;"; -->
