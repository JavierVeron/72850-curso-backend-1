const enviarForm = () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const resultado = document.getElementById("resultado");
    const usuario = {nombre:nombre, email:email, pass:pass};    

    fetch("/user", {
        method:"post",
        headers:{'Content-type': 'application/json; charset=UTF-8'},
        body:JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(result => {        
        let mensaje = `<div class="alert ${result.resultado == "ok" ? "alert-success" : "alert-danger"}" role="alert">${result.mensaje}</div>`;
        resultado.innerHTML = mensaje;
        console.log(result.users);
    })
}