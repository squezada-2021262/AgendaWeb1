function guardarYEntrar() {
    // 1. Capturamos los valores de los inputs por su ID
    const correo = document.getElementById('emailInput').value;
    const pass = document.getElementById('passInput').value;

    // 2. Validación básica
    if (correo.trim() === "" || pass.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 3. GUARDAR EN LOCALSTORAGE
    localStorage.setItem('usuarioCorreo', correo);
    localStorage.setItem('usuarioPassword', pass);

    // 4. Redirigir a la siguiente página (Entrando a carpeta html)
    window.location.href = "html/contactos.html";
}