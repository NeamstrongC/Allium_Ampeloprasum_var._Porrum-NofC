// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionamos el botón por su ID
    const boton = document.getElementById('botonAlerta');

    // Verificamos que el botón exista (buena práctica)
    if (boton) {
        boton.addEventListener('click', function () {
            Swal.fire({
                title: '¡N SERVERS!',
                text: 'En este momento estamos trabajando para tener lista está y otras secciones N, junto con los terminos y condiciones + las politicas de privacidad.',
                // icon:'warning',
                confirmButtonText: 'Entendido',
                // Puedes agregar más opciones aquí
                footer: 'N DE COLOMBIA.',
                // background:'',
                backdrop:'true',
                // timer:'',
                // toast:'',
                // position:'',
                allowOutsideClick:false,
                stopKeydownPropagation:false,
                allowEscapeKey:false,
                allowEnterKey:false,
                // customClass:{},
                imageUrl:'assets/images/cookieN.png',
                imageWidth:'40%',





            });
        });
    }
});
