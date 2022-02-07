class ControllerAluno {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#inputNome' );
        this._inputNota1 = $('#inputNota1' );
        this._inputNota2 = $('#inputNota2' );
        this._inputFrequencia = $('#inputFrequencia' );
        this._inputFezFinal = $('#inputFezFinal' );
        this._inputFinal = $('#inputFinal' );

        this._aluno = new Aluno(); 

        this._alunoView = new ViewAluno($('#js-tabelaViewAluno') );

        this._alunoView.update(this._aluno) ;
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event) {
        
        event.preventDefault();

        let item = this._criaAluno();
        this._aluno.adiciona (item ); 
        this._alunoView.update (this._aluno );

        this._limpaFormulario();


        this._mensagem.texto = `O Aluno ${item.nome} foi adicionado à tabela`;
        this._mensagemView.update(this._mensagem );

    }

    _criaAluno() {

        return new ItemAluno(

            this._inputNome.value,
            this._inputNota1.value,
            this._inputNota2.value,
            this._inputFrequencia.value,
            this._inputFezFinal.value,
            this._inputFinal.value  
        );
    }

    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputNota1.value = '';
        this._inputNota2.value = '';
        this._inputFrequencia.value = '';
        this._inputFinal.value = '';

        this._inputNome.focus();
    }
}