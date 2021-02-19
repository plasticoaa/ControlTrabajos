<?php

function obtenerPagActual(){
    $archivo = basename($_SERVER['PHP_SELF']);
    $pagina = str_replace(".php", "", $archivo);
    return $archivo;
}

obtenerPagActual();