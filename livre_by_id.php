<?php

$id = $_GET["id"] ?? null;
$connexion = new PDO("mysql:host=localhost;dbname=biblio", "root", "");
$resultat = $connexion->query("SELECT * FROM livre WHERE id = $id");

if($resultat){ 
    $livre = $resultat->fetch(PDO::FETCH_ASSOC);
    echo json_encode($livre);
} else {
    echo "Erreur SQL";
}    
