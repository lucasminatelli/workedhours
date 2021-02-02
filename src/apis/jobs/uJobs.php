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
    $job_id = $r->job_id;
    $company_id = $r->company_id;
    $job_description = $r->job_description;
    $job_start = $r->job_start;
    $job_end = $r->job_end;

    //----- UPDATE -----//
    $query = " UPDATE jobs set 
            company_name='$company_name',
            job_description='$job_description',
            job_start='$job_start',
            job_end='$job_end'
            WHERE company_id='$job_id'
        ";
    mysqli_set_charset($con, 'uft8');
    $q = mysqli_query($con, $query);
    echo "Alterado com sucesso";
}
