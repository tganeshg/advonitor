<?php
ob_start();

function isValidJSON($str) {
   json_decode($str);
   return json_last_error() == JSON_ERROR_NONE;
}

$servername = "localhost";
$username   = "root";
$password   = "ganesh@345";
$dbname     = "advonitor";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$json_params = file_get_contents("php://input");

if (strlen($json_params) > 0 && isValidJSON($json_params))
  $decoded_params = json_decode($json_params);

$uname = (string)$decoded_params->username;
$password = (string)$decoded_params->password;

$sql = "SELECT username,password FROM users WHERE USERNAME=\"$uname\"";

//echo "$sql";

// Start the session - login tracking
session_start();

$result = $conn->query($sql);

$num_rows = mysqli_num_rows($result);

//echo "num rows = $num_rows";

if($num_rows == 0)
{
	echo "Username doesn't exist";
}
else
{
	// Associative array
	$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
	$test = $row["password"];
	//echo $test;
	
	if($test == $password)
	{
		echo "Login success";
		
		// Set the session vars
		$_SESSION["user"] = "$uname";
		$_SESSION["login_time"] = date('Y-m-d H:i:s');
		
		// Free result set
		mysqli_free_result($result);
		// Close connection
		$conn->close();
		ob_end_flush();
		exit;
	}
	else
		echo "Invalid Username / Password";
}

// Free result set
mysqli_free_result($result);

// Close connection
$conn->close();

ob_end_flush();
?>