<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("functions.php");

if(isset($_POST['roomName']) && isset($_POST['hasTV']) && isset($_POST['beds'])){

$roomName = $_POST['roomName'];
$hasTV = intval($_POST['hasTV']);
$beds = intval($_POST['beds']);

echo addRoom($roomName, $hasTV, $beds);
}
?>