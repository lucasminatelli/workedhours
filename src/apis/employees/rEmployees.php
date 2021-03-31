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
    $query = "SELECT * FROM employees";

    //----- SELECT workedhours -----//
    $data = array();
    mysqli_set_charset($con, 'uft8');
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data, JSON_NUMERIC_CHECK);
}
