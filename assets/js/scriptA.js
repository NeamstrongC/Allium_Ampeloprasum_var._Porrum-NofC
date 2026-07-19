/* ==========================================================================
   SERVIDOR N - SCRIPT UNIFICADO (PRELOADER, COOKIES Y SWEETALERT2)
   ========================================================================== */

// --- 1. CONTROL DEL BANNER DE CARGA (PRELOADER) ---

function quitarPreloader() {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Evitamos ejecutar la lógica si el preloader ya se está ocultando o ya no está
    if (preloader && !preloader.classList.contains('fade-out')) {
        // Agrega la clase de CSS para hacer el desvanecimiento (fade-out)
        preloader.classList.add('fade-out');
        
        // Habilita el scroll en el body quitando la clase de carga
        if (body) {
            body.classList.remove('loading-active');
        }
        
        // Oculta por completo el contenedor después de que termine la animación CSS (600ms es lo ideal)
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
}

// Controladores de eventos para apagar el preloader de forma segura
window.addEventListener('load', quitarPreloader);
window.addEventListener('pageshow', quitarPreloader); // Corrige el comportamiento al regresar con el botón "Atrás"

// Respaldo de seguridad extrema: Si algún recurso pesado se traba, el preloader cae a los 3 segundos
setTimeout(quitarPreloader, 3000);


// --- 2. CONTROL DEL BANNER DE COOKIES (COMPARTIDO ENTRE SITIOS) ---

document.addEventListener('DOMContentLoaded', () => {
    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    window.dataLayer = window.dataLayer || [];

    // Función auxiliar para leer cookies por su nombre
    function obtenerCookie(nombre) {
        const coincidencia = document.cookie.match(new RegExp('(^| )' + nombre + '=([^;]+)'));
        return coincidencia ? coincidencia[2] : null;
    }

    // Comprobamos si la cookie global ya existe en alguno de tus sitios
    if (!obtenerCookie('cookies-aceptadas-global')) {
        if (avisoCookies && fondoAvisoCookies) {
            avisoCookies.classList.add("activo");
            fondoAvisoCookies.classList.add("activo");
        }
    } else {
        // Si ya existe, saltamos el banner e inyectamos el evento directamente a Tag Manager
        window.dataLayer.push({"event": "aceptadas-cookies"});
    }

    // Evento al hacer clic en aceptar
    if (botonAceptarCookies) {
        botonAceptarCookies.addEventListener("click", () => {
            if (avisoCookies && fondoAvisoCookies) {
                avisoCookies.classList.remove("activo");
                fondoAvisoCookies.classList.remove("activo");
            }
            
            // Creamos la cookie con persistencia de 365 días
            // "path=/" es vital para que se comparta en todo el dominio neamstrongc.github.io
            const fechaExpiracion = new Date();
            fechaExpiracion.setTime(fechaExpiracion.getTime() + (365 * 24 * 60 * 60 * 1000));
            
            document.cookie = "cookies-aceptadas-global=true; expires=" + fechaExpiracion.toUTCString() + "; path=/; SameSite=Lax";
            
            window.dataLayer.push({"event": "aceptadas-cookies"});
        });
    }
});


// --- 3. ALERTA SWEETALERT2 ---

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('botonAlerta');
    if (boton) {
        boton.addEventListener('click', function () {
            Swal.fire({
                title: '¡N SERVERS!',
                text: '.',
                confirmButtonText: 'Entendido',
                footer: 'N DE COLOMBIA.',
                backdrop: true, // Corregido de string 'true' a booleano true
                allowOutsideClick: false,
                stopKeydownPropagation: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                imageUrl: 'assets/images/cookieN.png',
                imageWidth: '40%'
            });
        });
    }
});
