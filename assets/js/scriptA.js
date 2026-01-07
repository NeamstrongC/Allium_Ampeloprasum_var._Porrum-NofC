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
                icon: 'success',
                confirmButtonText: 'Entendido',
                // Puedes agregar más opciones aquí
            });
        });
    }
});
