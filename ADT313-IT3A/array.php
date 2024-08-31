<?php
$cars = array(
    "Volvo",
    "BMW",
    "Toyota"

);
$cars = ["Volvo", "BMW", "Toyota"];
echo $cars[1];


$user = array(
    "firstname"=>"Aaron",
    "lastname"=>"Sapiter",
);

echo $user['lastname'];

$information = array(
    "user" => array(
        "firstname"=>"aaron",
        "middlename"=>"bolea",
        "lastname"=>"sapiter"
    ),
    "address"=>array(
       "province"=>"bulacan",
        "municipality"=>"bocaue",
        "street"=>" random street" 
    )
 );
echo $information['user']['firstname'];
?>