const moment = require("moment");

const fechaActual = moment();
let fechaNacimiento = "1994-09-01";

if (moment("1994-09-01").isValid()) {
    const fechaNacimientoMoment = moment(fechaNacimiento);
    //console.log(fechaNacimientoMoment);
    let anios = fechaActual.diff(fechaNacimientoMoment, "years");
    let meses = fechaActual.diff(fechaNacimientoMoment, "months");
    let dias = fechaActual.diff(fechaNacimientoMoment, "days");
    console.log("Días", dias);   
    console.log("Meses:", meses);   
    console.log("Años", anios);   
    //console.log("Fecha válida!");
} else {
    //console.log("Fecha inválida!");
    
}