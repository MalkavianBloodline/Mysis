<?php
    $fichier = file_get_contents('youtube.json',true);
    $varJSon = json_decode($fichier,true);
    $postdata = file_get_contents('php://input');
    $varJSon2 = json_decode($postdata,true);

    //Ajout des éléments
    $varJSon[] = $varJSon2;

    $varJSon = json_encode($varJSon);
    file_put_contents('youtube.json', $varJSon);
    header('Location: index.html');
?>