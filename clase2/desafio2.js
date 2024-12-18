class TicketManager {
    constructor() {
        this.eventos = [];
    }

    static precioBaseGanacia = 100000;

    getEventos() {
        return this.eventos;
    }

    getEventoId() {
        return this.eventos.length + 1;
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha) {
        let fechaJS = new Date();
        let fechaActual = fecha ? fecha : `${fechaJS.getDate()}-${fechaJS.getMonth()+1}-${fechaJS.getFullYear()}`;
        const evento = {id:this.getEventoId(), nombre:nombre, lugar:lugar, precio:precio*1.15, capacidad:capacidad, fecha:fechaActual, participantes:[]}
        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        let evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            let usuario = evento.participantes.find(item => item == idUsuario);
            
            if (usuario) {
                console.log("El Usuario #" + idUsuario + " ya se encuentra registrado!");
            } else {
                evento.participantes.push(idUsuario);
                console.log("Se agregó el Usuario #" + idUsuario + " al Evento #" + idEvento);
            }
        } else {
            console.log("No Existe el Evento!");
        }
    }

    ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
        let evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            const nuevoEvento = {...evento, id:this.getEventoId(), lugar:nuevoLugar, fecha:nuevaFecha};
            this.eventos.push(nuevoEvento);
        } else {
            console.log("No Existe el Evento!");
        }
    }
}

const TM = new TicketManager();
TM.agregarEvento("Mandarine", "Punta Carrasco", 120000, 2000, "21-12-2024");
TM.agregarEvento("Moon Park", "Costa Salguero", 150000, 3000);
TM.agregarUsuario(3, 1); // No funciona
TM.agregarUsuario(1, 2);
TM.ponerEventoEnGira(3, "Punta del Este", "01-01-2025"); // No funciona
TM.ponerEventoEnGira(2, "Punta del Este", "01-01-2025");
console.log(TM.getEventos());