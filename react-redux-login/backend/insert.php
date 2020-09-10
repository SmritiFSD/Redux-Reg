<?php 
include "connection.php";

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	$fname = $request->fname;
	$lname = $request->lname;
	$mobile = $request->mobile;
	$address = $request->address;
	$email = $request->email;
	$password =$request->password;
	$sql = "INSERT INTO reactproject VALUES ('','$fname','$lname','$mobile','$address','$email','$password')";
	if(mysqli_query($conn,$sql)){
		http_response_code(201);
	}
	else
	{
		http_response_code(422);
	}
}


 ?>
 