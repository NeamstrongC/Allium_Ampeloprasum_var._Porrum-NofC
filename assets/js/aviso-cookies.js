const botonAceptarCookies = document. getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if (!localStorage.getItem('cookies-aceptadas')) {
avisoCookies.classList.add("activo");
fondoAvisoCookies.classList.add("activo")
} else {
      dataLayer.push({"event":"aceptadas-cookies"});
}





botonAceptarCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");

localStorage.setItem("cookies-aceptadas", true);

   dataLayer.push({"event":"aceptadas-cookies"});
});