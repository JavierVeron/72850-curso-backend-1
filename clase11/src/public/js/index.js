const socket = io();
const chatBox = document.getElementById("chatBox");
let usuario = "";
let imagen = "";

Swal.fire({
    title: "Ingrese su Nombre:",
    input: "text",
    inputValidator: (valor) => {
        return !valor && "Debe ingresar un Nombre!"
    },
    allowOutsideClick: false,
}).then(resultado => {
    usuario = resultado.value;
    socket.emit("nuevoUsuario", usuario);

    Swal.fire({
        title: "Ingrese su Foto:",
        input: "text",
        inputValidator: (valor) => {
            return !valor && "Debe ingresar un Nombre!"
        },
        allowOutsideClick: false,
    }).then(resultado => {
        imagen = resultado.value;
    })
})

const enviarMensaje = () => {
    if (chatBox.value.trim().length > 0) {
        socket.emit("message", {user:usuario, image:imagen, message:chatBox.value});
        chatBox.value = "";
    }
}

chatBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        enviarMensaje();
    }
})

socket.on("nuevoUsuario", data => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: data,
        showConfirmButton: false,
        timer: 3000
    });
})

socket.on("messageLogs", data => {    
    let contenidoHTML = `<table cellpadding="5" cellspacing="5" border="0">`;

    data.forEach(item => {
        contenidoHTML += `<tr>
        <td><img src="${item.image}" border="0" width="64" /></td>
        <td><b>${item.user}:</b><br />${item.message}</td>
        </tr>`;
    });

    contenidoHTML += `</table>`;
    document.getElementById("messageLogs").innerHTML = contenidoHTML;
})