<!doctype html>
<html>
<head>

<style>

</style>

</head>
<body>

<?php 

$select = $_POST('select');

$con = mysqli_connect('localhost','root','','sampledb');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"users_data");
$result = mysqli_query($con,"SELECT * FROM username");*/

$connection = mysqli_connect("localhost", "root", "", "sampledb");

if (!$connection) {
    die("Connection failed: " .mysqli_connect_error());
}
mysqli_close($connection);

echo '<h1> This is my script working </h1>';

?>




</body>
</html>