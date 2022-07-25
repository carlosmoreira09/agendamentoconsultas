class ConsultaController {
    constructor() {
        var $ = document.querySelector.bind(document);
        var idconsulta = document.querySelector('#consultasView');
        var idmensagem = document.querySelector('#mensagemView');

        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputIdade = $('#idade');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');

        this._listaConsultas = new ListaConsultas();

        this._consultasView = new ConsultasView(idconsulta);
      //  this._consultasView.update(this._listaConsultas);

        this._mensagem = new Mensagem();
        this._mensagemView = new Mensagem(idmensagem);

        this._view = new View(idconsulta)
    }

    add(event) {
        event.preventDefault();
        
        var $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputIdade = $('#idade');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');

        let consulta = new Consulta(
            this._inputNome.value,
            new Date(...
                this._inputData.value
                    .split('-')
                    .map((item, indice) => item - (indice % 2))
            ),

            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value,
        );

        this._listaConsultas.add(consulta);
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value,
        );
    }
    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputIdade.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";
        this._inputNome.focus();
    }
}

