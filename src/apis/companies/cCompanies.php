<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset = utf-8');

include "../dbConnection.php";

$con = conexao();
if (!$con) {
    die("Ocorreu um erro na conexão com o banco de dados.");
    echo "Ocorreu um erro na conexão com o banco de dados.";
} else {
    //----- Variáveis  -----//
    $postdata = file_get_contents("php://input");
    $r = json_decode($postdata);
    $company_id = $r->company_id;
    $company_name = $r->company_name;

    //----- INSERT -----//
    $query = " INSERT INTO companies(
        `company_name`
    ) VALUES (
        '$company_name'
    )
    ";
    mysqli_set_charset($con, 'uft8');
    if (mysqli_query($con, $query)) {
        http_response_code(201);
        echo "Novo registro inserido.";
    } else {
        http_response_code(422);
    }
}
