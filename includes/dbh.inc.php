<?php   

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "tuhuevo";

$conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error){
    die("Error de conexión: " . $conn->connect_error);
}
?>
