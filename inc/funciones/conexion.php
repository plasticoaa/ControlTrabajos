<?php 

$con = new mysqli($host = 'localhost', $username = 'tesearho_tareas', $passwd = '260498Aa@', $dbname = 'tesearho_tareas');

    if ($con->connect_error) {  
        echo $con->connect_error;
    }

    $con->set_charset('utf8');