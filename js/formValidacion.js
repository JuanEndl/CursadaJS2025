document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se envíe el formulario
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Elimina los error en caso de que se cumpole la condicion correcta
        document.querySelectorAll(".error").forEach(el => el.remove());

        let hayError = false;

        // Validación nombre
        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre es obligatorio.");
            hayError = true;
        } else if (/\d/.test(nombre.value)) { /* por lo que investigue \d representa cualquier dígito del 0 al 9. y sumando el .test verifica si hay algun numero en el campo */
            mostrarError(nombre, "El nombre no puede contener números.");
            hayError = true;
        }

        // Validación email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*Verifica Que haya texto antes del @, Que haya un @, Que haya texto después del @, Que haya un . después del dominio, Que haya texto después del ., Que no haya espacios ni múltiples @*/
        if (!emailRegex.test(email.value)) {
            mostrarError(email, "Ingresá un email válido.");
            hayError = true;
        }

        // Validación mensaje
        if (mensaje.value.trim().length < 10) { /*Verifica que el texto debe contener mas de 10 caracteres si no lo valida*/
            mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres.");
            hayError = true;
        }

        if (!hayError) {
            alert("Formulario enviado correctamente. ¡Gracias por tu mensaje!"); /* muestra el mensaje que se envio */
            formulario.reset();
        }
    });

    /* funcion que muestra la validacion del error */

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
