<?php
$number =$_POST['num'];
$const=1;
for($i=1;$i<=$number;$i++){
    $const*= $i;
}
echo "El factorial del numero ingresado es $const";
