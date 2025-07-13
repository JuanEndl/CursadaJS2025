document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se envíe el formulario
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Limpiar mensajes anteriores
        document.querySelectorAll(".error").forEach(el => el.remove());

        let hayError = false;

        // Validación nombre
        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre es obligatorio.");
            hayError = true;
        } else if (/\d/.test(nombre.value)) {
            mostrarError(nombre, "El nombre no puede contener números.");
            hayError = true;
        }

        // Validación email (regex simple)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            mostrarError(email, "Ingresá un email válido.");
            hayError = true;
        }

        // Validación mensaje
        if (mensaje.value.trim().length < 10) {
            mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres.");
            hayError = true;
        }

        if (!hayError) {
            alert("Formulario enviado correctamente. ¡Gracias por tu mensaje!");
            formulario.reset();
        }
    });

    function mostrarError(campo, mensaje) {
        const error = document.createElement("p");
        error.className = "error";
        error.textContent = mensaje;
        error.style.color = "#ef4444";
        error.style.fontSize = "0.9rem";
        error.style.marginTop = "4px";
        campo.parentNode.appendChild(error);
    }
});
