<?php

if($_GET){
    $nb1 = $_GET["nb1"];
    $nb2 = $_GET["nb2"]; 
    $resultat = $nb1 + $nb2;
    echo $resultat;  
} else {
    echo "calcul impossible sans valeurs données";
}

?>
