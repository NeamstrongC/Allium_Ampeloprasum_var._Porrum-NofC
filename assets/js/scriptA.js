// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionamos el botón por su ID
    const boton = document.getElementById('botonAlerta');

    // Verificamos que el botón exista (buena práctica)
    if (boton) {
        boton.addEventListener('click', function () {
            Swal.fire({
                title: '¡GRACIAS :)!',
                text: 'Estamos trabajando para tener N sección en funcionamiento.',
                icon: 'success',
                confirmButtonText: 'Entendido',
                // Puedes agregar más opciones aquí
            });
        });
    }
});