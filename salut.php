<?php

if(!empty($_POST["prenom"])){
    echo "Salut " . strtoupper($_POST["prenom"]);  
}
else {
    echo "requete impossible";
}

// if($_POST){
//     $prenom = $_POST["prenom"]; 
//     echo "Salut $prenom";  
// } else {
//     echo "requete impossible";
// }

?>