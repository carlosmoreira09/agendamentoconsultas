
class ListaConsultas {
     
    constructor() {
        this._consultas = [];
    }

    add(consulta) {
        this._consultas.push(consulta);

    }


    get consultas() {
        return [].concat(this._consultas);
    }

}

