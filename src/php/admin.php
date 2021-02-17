<?php
$connection = include_once "./connections.php";
if (isset($_GET["deleteMultiple"]) && $_GET["deleteMultiple"] != "") {
    //when multiple checkboxes is set and delete btn is pushed.
    $deleteStatement = "IN " . $_GET["deleteMultiple"];
    $connection->delete__data($deleteStatement);
    unset($_GET["deleteMultiple"]);
}
if (isset($_GET["deleteSingle"]) && $_GET["deleteSingle"] != "") {
    //when delete btn in row is used.
    $deleteStatement = "IN (" . $_GET["deleteSingle"] . ")";
    $connection->delete__data($deleteStatement);
    unset($_GET["deleteSingle"]);
}

$selectedEmailCount = isset($_GET["selectedEmailCount"]) ? intval($_GET["selectedEmailCount"]) : 10;
$emailSearchRange = $selectedEmailCount;
$justConnected = count($_GET) != 0;
$emailsSelectUsed = isset($_GET["email_select"]) && $_GET['email_select'] != "select" ? true : false;
$emailsSelectAll = isset($_GET["email_select"]) && $_GET["email_select"] == "All" ? true : false;
$searchBarUsed = isset($_GET["search"]) && strlen($_GET['search']) != 0 ? true : false;
$PageChangeBtnPushed = isset($_GET["btnPushed"]);
$searchValue = "";

session_start();
$currentState = $_SESSION['currentEmailLimit'] ?? 0;
if ($PageChangeBtnPushed) {
    if ($_GET["btnPushed"] == "next") {
        $limitNR = $currentState + $selectedEmailCount;
        $emailSearchRange = $limitNR . ', ' . $selectedEmailCount;
    }
    if ($_GET["btnPushed"] == "back") {
        $limitNR = $currentState - $selectedEmailCount;
        if ($limitNR < 0) {$limitNR = 0;}
        $emailSearchRange = $limitNR . ', ' . $selectedEmailCount;
    }
    $_SESSION['currentEmailLimit'] = isset($limitNR) ? $limitNR : 0;
    unset($_GET["btnPushed"]);
}

if ($emailsSelectAll) {
    $statement = "limit " . $emailSearchRange;
    $emails = $connection->custom__data($statement);

    unset($_GET["email_select"]);
} elseif ($emailsSelectUsed) {
    $statement = "WHERE `email` LIKE '%" . $_GET['email_select'] . "%' limit " . $emailSearchRange;
    $emails = $connection->custom__data($statement);

    unset($_GET["email_select"]);
} elseif ($searchBarUsed) {
    $statement = "WHERE `email` LIKE '%" . $_GET['search'] . "%' limit " . $emailSearchRange;
    $emails = $connection->custom__data($statement);

    $searchValue = isset($_GET["search"]) ? $_GET["search"] : "";
    //displaying searched value is searchbox
    unset($_GET["search"]);
    unset($_GET["email_select"]);
} elseif ($justConnected) {
    //if custom view not defined.
    $statement = "limit " . $emailSearchRange;
    $emails = $connection->custom__data($statement);

} else {
    //if somehow everything fails.
    $emails = $connection->get__data();
}
$emailCount = sizeof($emails);
$_SESSION['emailCount'] = $emailCount;
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
                        <input type="text" name="search" value="<?php echo $searchValue; ?>">
                        <button type="submit">search</button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="hidden" name="sort" value="byID">
                        <button type="">Sort</button>
                    </th>
                    <th>
                        <select name="email_select" onchange="this.form.submit()" >
                            <option  style="display: none" >
                                <?php echo isset($_GET["email_select"]) ? $_GET["email_select"] : "select" ?>
                            </option>
                            <option value="All">All</option>
                            <option value="gmail.com">gmail</option>
                            <option value="Yahoo.com">Yahoo</option>
                            <option value="Outlook.com">Outlook</option>
                            <option value="inbox.lv">inbox</option>
                        </select>
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
                        document.getElementById('deleteSingle').value = '<?php echo $emails[$i]['ID']; ?>';
                        })()">delete</button>
                </th>
            </tr>
            <?php }?>
        </tbody>
        <tfoot>
            <tr>
                <th id="emailCount"><?php echo $emailCount; ?></th>
                <th>
                    <input type="hidden" id="pageValues" name="btnPushed" value="">
                    <button id="backBtn" <?php if ($currentState == 0) {echo "disabled";}?>>&#8656</button>
                    <select onchange="this.form.submit()" name="selectedEmailCount" id="selectedEmailCount" >
                        <option style="display: none"><?php echo $selectedEmailCount ?></option>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                    </select>
                    <button id="nextBtn">&#8658</button>
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

    const pageValues = document.getElementById("pageValues");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    const selectedEmailCount = document.getElementById("selectedEmailCount").value;


    if(displayedEmailsCount < selectedEmailCount){
        nextBtn.disabled = true;
    }



    nextBtn.onclick = function nextPage(){
        pageValues.value = "next";
    }
    backBtn.onclick = function nextPage(){
        pageValues.value = "back";
    }




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
    };
</script>

</body>
</html>
