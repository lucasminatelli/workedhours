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
    $employee_id = $r->employee_id;
    $employee_description = $r->employee_description;

    //----- INSERT -----//
    $query = " INSERT INTO employees(
        `employee_description`
    ) VALUES (
        '$employee_description'
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
