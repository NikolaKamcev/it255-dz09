<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("functions.php");

if(isset($_POST['hotelName']) && isset($_POST['Adress']) && isset($_POST['Telephone'])){

$hotelName = $_POST['hotelName'];
$Adress = intval($_POST['Adress']);
$Telephone = intval($_POST['Telephone']);

echo addRoom($hotelName, $Adress, $Telephone);
}
?>