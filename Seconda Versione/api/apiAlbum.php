<?php 

    include __DIR__ . '/../db/dbAlbum.php';
    header('Content-Type: application/json');


    $res = [
        'success' => true,
        'response' => $dbDiscs
    ];

    echo json_encode($dbDiscs);

    



