eventListeners()
function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);       
}

function validarRegistro(e) {
    e.preventDefault();

    var usuario = document.querySelector('#usuario').value,
        pasword= document.querySelector('#password').value;
        //Si el formulario esta vacio manda la alerta
        if (usuario==='' || pasword==='') {
            Swal.fire({
                icon: 'error',
                title: 'Incompleto',
                text: 'Usuario/Pass requerido'
            })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Ingreso',
                text: 'Bienvenido al Portal'
            })
        }
}
