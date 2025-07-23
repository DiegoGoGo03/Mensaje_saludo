function generarMensaje() {
    const nombre = document.getElementById('nombre').value.trim();
    const ticket = document.getElementById('ticket').value.trim();
    const tuNombre = "Diego";

    if (!nombre || !ticket) {
    alert("Por favor llena todos los campos.");
    return;
    }

    const mensaje = `Hola ${nombre} buen día, te escribe ${tuNombre} y seré el encargado de tu consulta con No. de Ticket ${ticket}.`;
    document.getElementById("resultado").innerText = mensaje;

    navigator.clipboard.writeText(mensaje)
    .then(() => console.log("Mensaje copiado al portapapeles."))
    .catch(err => console.warn("No se pudo copiar: ", err));
}

function copiarMensaje() {
    const mensaje = document.getElementById("resultado").innerText;

    if (!mensaje) {
        alert("Primero genera el mensaje antes de copiar.");
        return;
    }

    navigator.clipboard.writeText(mensaje)
        .then(() => alert("Mensaje copiado al portapapeles."))
        .catch(err => console.warn("No se pudo copiar: ", err));
}

// Asociar botón a la función
document.getElementById("button_copy").addEventListener("click", copiarMensaje);