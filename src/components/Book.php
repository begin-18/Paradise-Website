<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$conn = new mysqli("localhost", "host", "", "bookinsdb");

if(mysqli_connect_error()){
  echo mysqli_connect_error();
  exit();
}
else{
  $first = $_POST['first'];
  $last = $_POST['last'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $date = $_POST['date'];
 
  $sql = "INSERT INTO reactusers(first,last,email,mobile,date) VALUES('$first','$last','$email','$mobile','$date');";
  $res = mysqli_query($conn, $sql);

  if($res){
    echo"Success";
  }
  else{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  $conn->close();
}
?>
