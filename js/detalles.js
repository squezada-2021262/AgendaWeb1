document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const nombreRecibido = queryParams.get('nombre');
    const telRecibido = queryParams.get('tel');
    const correoRecibido = queryParams.get('correo');

    document.getElementById('nombreTxt').textContent = nombreRecibido || "Contacto no encontrado";
    document.getElementById('telTxt').textContent = telRecibido || "N/A";
    document.getElementById('correoTxt').textContent = correoRecibido || "N/A";
});