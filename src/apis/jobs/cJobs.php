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
    $job_description = $r->job_description;
    $job_start = $r->job_start;
    $job_end = $r->job_end;

    //----- INSERT -----//
    $query = " INSERT INTO jobs(
        `company_id`,
        `job_description`,
        `job_start`,
        `job_end`
    ) VALUES (
        '$company_name',
        '$job_description',
        '$job_start',
        '$job_end'
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
