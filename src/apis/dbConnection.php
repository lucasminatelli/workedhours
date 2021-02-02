<?php
header('Access-Control-Allow-Origin: *');

function conexao()
{
    $con = mysqli_connect('localhost', 'id15927647_workedhours_user', 'Minatelli[123]', 'id15927647_workedhours_db');
    return $con;
}
