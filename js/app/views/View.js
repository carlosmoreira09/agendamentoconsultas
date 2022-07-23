class View { 
    constructor(elemento) {
        this._elemento = elemento;
        console.log(elemento);
    }
    update(model){ 
        console.log(model);

        this._elemento.innerHTML = this._template(model);
    }
}
