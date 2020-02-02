<?php

$server = 'db';
$user = 'root';
$pass = '';
$banco = 'docker';

$conn = new mysqli($server, $user, $pass, $banco);

if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}
echo "Connected successfully";

$res = $conn->query("SELECT * FROM pacientes");

echo "<pre>";
print_r($res->fetch_all());

?>