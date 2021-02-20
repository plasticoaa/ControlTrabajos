<?php
$accion = $_POST('accion');
$password = $_POST('password');
$usuario= $_POST('usuario');

if ($accion === 'crear') {
    //Creacion de los administradores 
    $opciones = array(
        'cost'=> 12
    );
    $hash_password = password_hash($password, PASSWORD_BCRYPT, $opciones);
    //Importar la Conexion 
    include '../funciones/conexion.php'; 
    try {
        $stmt = $con->prepare("INSERT INTO usuarios(usuario, password) VALUES(?,?) ");
        $stmt->bind_param('ss', $usuario,$hash_password);
        $stmt->execute();
        if ($stmt->affected_rows>0) {
            $respuesta = array(
                'respuesta'=> 'correcto',
                'id_insertado' => $stmt->insert_id,
                "tipo" => $accion
            );
        }else{
            $respuesta = array(
                'respuesta'=> 'error'
            );
        }
        
        $stmt->close();
        $con->close();
        
    } catch (Exception $e) {
        
    $respuesta = array(
        'pass' => $e->getMessage()
    );
    }
    echo json_encode($respuesta);


}
if ($accion === 'login') {
    //Escribir codigo que loguea a los administradores
}
?>