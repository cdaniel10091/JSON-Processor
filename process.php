<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "json_processor";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$jsonData = json_decode(file_get_contents('php://input'), true);

$data = new stdClass();
$data->name = $jsonData['name'];
$data->cpf = $jsonData['cpf'];
$data->age = $jsonData['age'];

$sql = "INSERT INTO json_data (name, cpf, age) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
if (!$stmt) {
  echo "Error preparing statement: ". $conn->error;
  exit;
}

$stmt->bind_param("sss", $data->name, $data->cpf, $data->age);
$stmt->execute();

$conn->close();

echo "Dados salvos com sucesso!";
?>