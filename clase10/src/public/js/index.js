const socket = io();
/* // Emitir un mensaje desde el Cliente con la etiqueta "mensajito"
socket.emit("mensajito", "Hola! Estamos viendo WebSockets en Coder!");
// Recibir los mensajes del Servidor
socket.on("socket_actual", data => {
    console.log(data);
})
socket.on("todos_socket_menos_actual", data => {
    console.log(data);
})
socket.on("socket_global", data => {
    console.log(data);
}) */

socket.on("mensajes", data => {
    const mensajes = document.getElementById("mensajes");
    let contenidoHTML = `<ul class="list-group list-group-flush">`;

    data.forEach(item => {
        contenidoHTML += `<li class="list-group-item"><img src="https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg?semt=ais_hybrid" width=48 /> ${item.mensaje}</li>`;
    })

    contenidoHTML += `</ul>`;
    mensajes.innerHTML = contenidoHTML;
})

const enviarMensaje = () => {
    const mensaje = document.getElementById("mensaje");
    socket.emit("mensajes", mensaje.value);
    mensaje.value = "";
}