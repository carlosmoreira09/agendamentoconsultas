class ConsultasView extends View {
    constructor(elemento) {
        super(elemento);
    }
  
    _template(model) {
        return ` 
        <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Data da Consulta</th>
                <th scope="col">Idade</th>
                <th scope="col">Peso(kg)</th>
                <th scope="col">Altura(m)</th>
                <th scope="col">IMC</th>
            </tr>
        </thead>
        <tbody>
            ${model.consultas.map(c => `
            <tr>
            <td>${c.nome}</td>
            <td>${DateHelper.dataParaTexto(c.data)}</td>
            <td>${c.idade}</td>
            <td>${c.peso}</td>
            <td>${c.altura}</td>
            <td>${c.imc.toFixed(2)}</td>
            `).join('')}
        </tbody>

    </table>
    `;
    }

    add(event) {
        event.preventDefault();
        this._listaConsultas.add(this._criaConsulta());
        this._mensagem.texto = 'Consulta agendada com sucesso!';
        this.mensagemView.update(this._mensagem);
        
        this._consultasView.update(this._listaConsultas);
        this._limpaFormulario();
    }
}