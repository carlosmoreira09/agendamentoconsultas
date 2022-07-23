class Consulta {
    constructor(nome,data,idade,peso,altura) {
        this._nome = nome;
        this._data = data;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        
    }

    get imc() {
        return this._peso / (this._altura * this._altura);
    }

    get nome() {
        return this._nome;
    }
    get data() {
        return this._data;
    }
    get idade() {
        return this._idade;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
}