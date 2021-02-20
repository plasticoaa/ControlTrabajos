eventListeners()
function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);       
}

function validarRegistro(e) {
    e.preventDefault();

    var usuario = document.querySelector('#usuario').value,
        pasword= document.querySelector('#password').value,
        tipo =document.querySelector('#tipo').value;
        //Si el formulario esta vacio manda la alerta
        if (usuario==='' || pasword==='') {
            Swal.fire({
                icon: 'error',
                title: 'Incompleto',
                text: 'Usuario/Pass requerido'
            })
        }else{
//Si lo campos no estan vacios se realiza la validacion
            var datos = new FormData();
                datos.append('usuario',usuario);
                datos.append('password',password);
                datos.append('accion',tipo);

                //Creacion de Ajax 
                var xhr= new XMLHttpRequest();
                //Abrir  la conexion Ajax 
                xhr.open('POST','inc/modelos/modelo-admin.php',true);
                //Retorno de datos
                xhr.onload= function () {
                    if (this.status === 200) {
                            var respuesta=JSON.parse(xhr.responseText);

                            //Si la validacion es correcta
                            if (respuesta.respuesta === 'correcto') {
                                if (respuesta.tipo ==='crear') {

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Usuario Creado',
                                        text: 'El Usuario se creo correctamente'

                                    })
                                    
                                }
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error Crear Usuario',
                                    text: 'No se creo el usuario'

                                }) 
                            }
                        }
                }

                //Enviar la Peticion
                xhr.send(datos);




        }
}
