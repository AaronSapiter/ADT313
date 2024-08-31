<h1>Condition</h1>

<?php
$age =50;
if($age >= 18){
    echo "Legal Age";
}else if ($age >= 0 && $age <= 10){
    echo 'something';
}else{
    echo "Minor";
}

echo ($age >=18) ? ' 18+' : '17-';


$role = 'instructor';
switch ($role){
    case 'admin';
    echo 'you have full access....';
    break;


    case 'student';
    echo 'you have limited access...';

    case 'instructor';
    echo 'whop are you?'





}





?>