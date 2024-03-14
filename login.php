<?php
session_start();
include "db_conn.php";

if(isset($_POST['uname']) && isset($_POST['password'])){

    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if(empty($uname)){
    header ("Location: index.php?error=User Name is Required");
    exit();
}
else if(empty($pass)){
    header ("Location: index.php?error=Password is Required");
    exit();
}

$sql = "Select * from users where user_name='$uname'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result)===1){
    $row  = mysqli_fetch_assoc($result);
    if($row['user_name']===$uname && $row['password']===$pass){
        echo"Logged In!";
        $_SESSION['user_name'] = $row['user_name'];
        $_SESSION['name'] = $row['name'];
        $_SESSION['id'] = $row['id'];
        header("Location: adk.php");
        exit();
    }
    else{
        header("Location: index.php?error=Incorrect user name or password");
        exit();
    }
}
else{
    header("Location: index.php");
    exit();
}
?>
