/* ==========================================================================
   SERVIDOR N - SCRIPT UNIFICADO (PRELOADER, COOKIES Y SWEETALERT2)
   ========================================================================== */

// --- 1. CONTROL DEL BANNER DE CARGA (PRELOADER) ---

function quitarPreloader() {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    if (preloader) {
        // Agrega la clase de CSS para hacer el desvanecimiento (fade-out)
        preloader.classList.add('fade-out');
        
        // Habilita el scroll en el body quitando la clase de carga
        if (body) {
            body.classList.remove('loading-active');
        }
        
        // Oculta por completo el contenedor después de que termine la animación
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 2500);
    }
}

// Apaga el preloader cuando la página termina de cargar por completo (imágenes, scripts, etc.)
window.addEventListener('load', quitarPreloader);

// Apaga el preloader de inmediato al mostrar la página (soluciona el bloqueo al regresar con el botón Atrás)
window.addEventListener('pageshow', (event) => {
    quitarPreloader();
});

// Respaldo de seguridad extrema: Si algún recurso tarda de más, se apaga incondicionalmente a los 3 segundos
setTimeout(quitarPreloader, 3000);


// --- 2. CONTROL DEL BANNER DE COOKIES ---

document.addEventListener('DOMContentLoaded', () => {
    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    window.dataLayer = window.dataLayer || [];

    // Si no se han aceptado antes, muestra el aviso
    if (!localStorage.getItem('cookies-aceptadas')) {
        if (avisoCookies && fondoAvisoCookies) {
            avisoCookies.classList.add("activo");
            fondoAvisoCookies.classList.add("activo");
        }
    } else {
        // Si ya estaban aceptadas, dispara el evento para Google Tag Manager
        window.dataLayer.push({"event": "aceptadas-cookies"});
    }

    // Evento al hacer clic en aceptar
    if (botonAceptarCookies) {
        botonAceptarCookies.addEventListener("click", () => {
            if (avisoCookies && fondoAvisoCookies) {
                avisoCookies.classList.remove("activo");
                fondoAvisoCookies.classList.remove("activo");
            }
            localStorage.setItem("cookies-aceptadas", "true");
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
                backdrop: 'true',
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