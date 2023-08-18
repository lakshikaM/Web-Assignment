<?php

$host = "localhost";
    $username = "root";
    $password = '';
    $dbname = "portfolio";

    $user_name=$_POST['username'];
    $psw=$_POST['password'];
    print_r($user_name);
    print_r($psw);
    $connection = mysqli_connect($host, $username, $password, $dbname);
    print_r($connection);
    if (!$connection) {
        die("Connection failed!" . mysqli_connect_error());
    }

    $sql = "INSERT INTO `user`(`username`, `psw`) VALUES ('$user_name', '$psw')";

    $rs = mysqli_query($connection, $sql);

mysqli_close($connection);
?>
