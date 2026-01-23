// Se ejecuta automáticamente al cargar la página de perfil
document.addEventListener('DOMContentLoaded', function() {
    // 1. Intentamos recuperar los datos del localStorage
    const correoGuardado = localStorage.getItem('usuarioCorreo');
    const elementoCorreo = document.getElementById('mostrarEmail');

    // 2. Si existe el correo, lo mostramos; si no, mostramos error
    if (correoGuardado) {
        elementoCorreo.innerText = correoGuardado;
    } else {
        elementoCorreo.innerText = "Error: Inicia sesión de nuevo";
        elementoCorreo.style.color = "red";
    }
});

// Función para mostrar la contraseña guardada
function verClave() {
    const span = document.getElementById('mostrarPass');
    const passReal = localStorage.getItem('usuarioPassword');
    
    if (span.innerText === "********") {
        span.innerText = passReal || "No definida";
    } else {
        span.innerText = "********";
    }
}

// Función para limpiar la memoria y regresar al login
function salir() {
    localStorage.clear(); 
    // RUTA CORREGIDA: Salimos de la carpeta html para ir al index en la raíz
    window.location.href = "../index.html";
}