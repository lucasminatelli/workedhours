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

    //----- DELETE -----//
    $query = " DELETE FROM employees WHERE employee_id='$employee_id'";
    mysqli_set_charset($con, 'uft8');
    $qI = mysqli_query($con, $query);
    echo "Excluído com sucesso";
}
