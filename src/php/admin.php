<?php
$connection = include_once "./connections.php";
if (isset($_GET["deleteMultiple"]) && $_GET["deleteMultiple"] != "" ) {
    //when multiple checkboxes is set and delete btn is pushed.
    $deleteStatement = "IN " . $_GET["deleteMultiple"];
    $connection->delete__data($deleteStatement);
    unset($_GET["deleteMultiple"]);
}
if (isset($_GET["deleteSingle"]) && $_GET["deleteSingle"] != "" ) {
    //when delete btn in row is used.
    $deleteStatement = "IN (".$_GET["deleteSingle"].")";
    $connection->delete__data($deleteStatement);
    unset($_GET["deleteSingle"]);
}

if (count($_GET) == 0) {
    //if custom view not defined.
    $emails = $connection->get__data();
} elseif ($_GET["email_select"] != "All") {
    //if specific emails provider selected.
    $statement = "WHERE `email` LIKE '%" . $_GET['email_select'] . "%'";
    $emails = $connection->custom__data($statement);
} elseif ($_GET["email_select"] == "All") {
    //if search bar used  , must change statement.
    $statement = "WHERE `email` LIKE '%" . $_GET['search'] . "%'";
    $emails = $connection->custom__data($statement);
}

$emailCount = sizeof($emails);

echo '<pre>';
var_dump($_GET);
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
<header><h1 style="text-align:center; margin:0;">email server</h1></header>
<main>
    <table style="width:fit-content;margin:0 auto;">
        <form action="./admin.php" method="get" target="_SELF">
            <thead style="background-color:grey;">
                <tr>
                    <th colspan="5">
                        <input type="text" name="search">
                        <button type="submit">search</button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="hidden" name="sort" value="byID">
                        <button type="">Sort</button>
                    </th>
                    <th>
                        <select name="email_select" >
                            <option  style="display: none" >
                                <?php echo isset($_GET["email_select"]) ? $_GET["email_select"] : "select" ?>
                            </option>
                            <option value="All">All</option>
                            <option value="gmail.com">gmail</option>
                            <option value="Yahoo.com">Yahoo</option>
                            <option value="Outlook.com">Outlook</option>
                            <option value="inbox.lv">inbox</option>
                        </select>
                        <button type="submit">Sort</button>
                    </th>
                    <th><button>Sort by date</button></th>
                    <th>xx1</th>
                    <th>xxx2</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>email</th>
                    <th>timestamp</th>
                    <th>all
                        <input type="checkbox" id="checkAll">
                    </th>
                    <th>action</th>
                </tr>
            </thead>
        <tbody>
            <input type="hidden" name="deleteSingle"  id="deleteSingle" value="">
            <?php for ($i = 0; $i < $emailCount; $i++) {?>
            <tr>
                <th><?php echo $emails[$i]['ID']; ?></th>
                <th><?php echo $emails[$i]['email']; ?></th>
                <th><?php echo $emails[$i]['date']; ?></th>
                <th>
                    <input type="checkbox" class="SelectCheckbox" name="id" value="<?php echo $emails[$i]['ID']; ?>">
                </th>
                <th>
                    <button
                    onclick="(function(){
                        document.getElementById('deleteSingle').value = '<?php echo $emails[$i]['ID'];?>';
                        })()">delete</button>
                </th>
            </tr>
            <?php }?>
        </tbody>
        <tfoot>
            <tr>
                <th id="emailCount"><?php echo $emailCount; ?></th>
                <th>
                    <button name="back">&#8656</button>
                    <button name="next">&#8658</button>
                </th>
                <th>placeholder</th>
                <th>
                    <input type="hidden"  id="deleteMultiple" name="deleteMultiple" value="">
                    <button id="deleteSelected" type="submit">delete</button>
                </th>
                <th>XXXXX</th>
            </tr>
        </tfoot>
         </form>
    </table>
</main>

<script>
    const selectAll = document.getElementById("checkAll");
    const deleteSelectedBtn = document.getElementById("deleteSelected");
    const allCheckboxes = document.getElementsByClassName("SelectCheckbox");
    const displayedEmailsCount = document.getElementById("emailCount").innerText;
    const deleteMultiple = document.getElementById("deleteMultiple");
    
    selectAll.onclick = function SetAllCheckbox() {
    if (selectAll.checked === true) {
        for (let index = 0; index < displayedEmailsCount; index++) {
        allCheckboxes[index].checked = true;
        }
    } else {
        for (let index = 0; index < displayedEmailsCount; index++) {
        allCheckboxes[index].checked = false;
        }
    }
    };
    deleteSelectedBtn.onclick = function deleteSelected(event) {
    let statement = "(";
    for (let index = 0; index < displayedEmailsCount; index++) {
        if (allCheckboxes[index].checked === true) {
        statement += allCheckboxes[index].value + ",";
        }
    }
    statement = statement.substring(0, statement.length - 1);
    //remove last coma ,
    statement += ")";
    //add ) for statement
    deleteMultiple.value = statement;
    //add value to form dummy input
    //   event.preventDefault();
    console.log(statement);
    };
</script>

</body>
</html>
