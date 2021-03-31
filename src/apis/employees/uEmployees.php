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

    //----- UPDATE -----//
    $query = " UPDATE employees set 
            employee_description='$employee_description'
            WHERE employee_id='$employee_id'
        ";
    mysqli_set_charset($con, 'uft8');
    $q = mysqli_query($con, $query);
    echo "Alterado com sucesso";
}
