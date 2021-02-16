<?php

$statement = "('user1@email.com')
,      ('user2@gmail.com')
,      ('user3@gmail.com')
,      ('user4@Yahoo.com')
,      ('user5@Yahoo.com')
,      ('user2@gmail.com')
,      ('user3@gmail.com')
,      ('user4@Yahoo.com')
,      ('user5@Yahoo.com')
,      ('user2@inbox.lv')
,      ('user3@inbox.lv')
,      ('user4@Outlook.com')
,      ('user5@Outlook.com');";
$connection = include_once "./connections.php";

if (isset($_POST['statement'])) {
    echo "fake emails added to server";
    $connection->Send__data($statement);
    $_POST = array();
}
?>
<form action="./addDummyEmails.php" method="post">
    <input type="hidden" name="statement" value="<?php echo $statement; ?>"  >
    <button type="submit">addd dummy emails</button>
</form>
