const enviarForm = () => {
    const nombre = document.getElementById("nombre").value;
    const form1 = document.getElementById("form1");
    fetch(form1.action, {
        method:"POST",
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body:JSON.stringify({nombre:nombre})
    })
    .then(resultado => {
        console.log(resultado);    
    })
}