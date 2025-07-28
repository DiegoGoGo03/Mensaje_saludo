function verificarOtro(selectId, inputId) {
    const operador = document.getElementById(selectId).value;
    const inputOtro = document.getElementById(inputId);
    if (operador === "otro") {
        //Mostar Campo
        inputOtro.style.display = "inline-block"
    } else {
        //Ocultar Campo
        inputOtro.style.display = "none";
        //Limpiar Campo
        inputOtro.value = "";
    }
}

//Mensaje de saludo
function generarMensaje() {
    const nombre = document.getElementById('nombre').value.trim();
    const ticket = document.getElementById('ticket').value.trim();
    const operadorSelect = document.getElementById('operador').value;
    const otroNombre = document.getElementById('otroOperador').value.trim()

    let tuNombre = operadorSelect === "otro" ? otroNombre : operadorSelect;

    if (!nombre || !ticket || !tuNombre) {
        alert("Por favor llena todos los campos")
    }

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

//Copiar mensaje de saludo
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


//Generar mensaje de No Disponible.
function generarMensajeNoDisponible() {
    const nombre_usuario = document.getElementById('nombre_usuario').value.trim();
    const operadorSelect = document.getElementById("operadorNoDisponible").value;
    const otroOperador = document.getElementById("otroOperadorNoDisponible").value;
    
    let operador = operadorSelect === "otro" ? otroOperador : operadorSelect;
    
    if (!operador) {
        alert("Por favor, selecciona o escribe un nombre de operador.");
        return;
    }
    
    const mensaje = `Hola ${nombre_usuario}, soy ${operador}, el técnico asignado para ayudarte. En este momento no puedo responder de inmediato, pero en unos minutos revisaré tu consulta con atención. Si deseas, puedes ampliar los detalles mientras tanto para agilizar la solución. ¡Gracias por tu paciencia!`

    document.getElementById("resultadoNoDisponible").innerText = mensaje;

    navigator.clipboard.writeText(mensaje)
        .then(() => console.log("Mensaje copiado al portapapeles."))
        .catch(err => console.warn("No se pudo copiar: ", err));
}

// Asociar botón a la función Botón de mensaje no disponible
document.getElementById("button_copy_nd").addEventListener("click", copiarMensaje);

//Mensaje por inactiviadad.
function generarMensajeInactividad() {
    const mensaje = `Su sesión de consulta ha excedido el tiempo permitido por inactividad y, por lo tanto, se cerrará automáticamente. Si requiere más asistencia, no dude en comunicarse nuevamente con el soporte técnico de Tekla Structures. Estaremos encantados de ayudarle.`

    document.getElementById("resultadoInactividad").innerText = mensaje;

    navigator.clipboard.writeText(mensaje)
        .then(() => console.log("Mensaje copiado al portapapeles."))
        .catch(err => console.warn("No se pudo copiar: ", err));
}

// Asociar botón a la función Botón de Mensaje por inactividad
document.getElementById("button_copy_inac").addEventListener("click", copiarMensaje);


//Mensaje para GHD
function generarMensajeGHD() {
    const mensaje = `Hola, hemos trasladado tu consulta directamente al equipo de desarrollo para que sea revisada con el detalle que requiere. Cerramos este ticket por este medio, pero el seguimiento continuará a través de TopDesk, donde recibirás las actualizaciones. Si necesitas reactivar la consulta más adelante, puedes reabrirla usando el número de ticket generado al inicio de esta conversación. Agradecemos tu paciencia y comprensión.`

    document.getElementById("resultadoGHD").innerText = mensaje;

    navigator.clipboard.writeText(mensaje)
        .then(() => console.log("Mensaje copiado al portapapeles."))
        .catch(err => console.warn("No se pudo copiar: ", err));
}

// Asociar botón a la función Botón de GHD
document.getElementById("button_copy_ghd").addEventListener("click", copiarMensaje);