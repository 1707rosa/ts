<?php
if(isset ($_POST['btn'])){
$a= $_POST['a'];
$b= $_POST['b'];
$c= $_POST['c'];
}

$e = ($b*$b) - (4*$a*$c);

if ($e < 0){
    echo "Indefinido";
}else{
    $x1= (-$b - sqrt($e) )/ (2*$a);
    $x2= (-$b + sqrt($e) )/ (2*$a);
    echo "<br> x1 = $x1 <br>";
    echo "x2 = $x2";
}
