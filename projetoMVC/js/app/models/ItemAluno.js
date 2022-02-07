class ItemAluno {


    constructor(nome, nota1, nota2, frequencia, fezfinal, final) {
        
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._frequencia = frequencia;
        this._fezfinal = fezfinal;
        this._final = final;
        this._situacao;

        
        Object.freeze(this);

    }

    get media () {
        return (this._nota1 + this._nota2)/2 ;
    }
    
    get nome() {
        return this._nome;
    }

    set nome(nome) {
       this._nome = nome;
    }
    
    get nota1() {
        return this._nota1;
    }

    set nota1(nota1) {
        this._nota1 = nota1;
    }

    get nota2() {
        return this._nota2;
    }

    set nota2(nota2) {
        this._nota2 = nota2;
    }

    get frequencia() {
        return this._frequencia;
    }

    set frequencia(frequencia) {
        this._frequencia = frequencia;
    }
    
    get fezfinal() {
        return this._fezfinal;
    }

    set fezfinal(fezfinal) {
        this._fezfinal = fezfinal;
    }

    get final() {
        return this._final;
    }

    set final(final) {
        this._final = final;
    }

    get situacao() {

        return this._situacao;
    }

    set situacao(situacao) {
        this._situacao = situacao;
    }

    getMedia(){
        let nota1 = parseFloat(this._nota1);
        let nota2 = parseFloat(this._nota2);
        return (nota1 + nota2) / 2;
    }

    getFinal() {

        if (this._fezfinal == "nao") {
            return "Não fez final";
        }


        if(this._fezfinal == "sim") {
            return (this.getMedia() + this._final)/2 
        }


    }

    definirSituacao() {

        if(this._frequencia >=75) {


            if(this.getMedia() >= 70 ){
                return "Aprovado (média > 70)";
            }

           if(this.getMedia() < 30 ){ 
            return "Reprovado (média < 30)";
            }


            if(this.getMedia() < 70 && this.getMedia() > 30) {

                if(this._fezfinal == "sim") {

                    if((this.getMedia() + this._final)/2 > 50) {

                        return "Aprovado";
                    }
    
                    else if ((this.getMedia() + this._final)/2 < 50) {
                        return "Reprovado";
                    }
                }

                if(this._fezfinal == "nao") { 

                 return "Reprovado sem final";

                }
            }


        }
        if(this._frequencia < 75) {
            return "Reprovado por falta";
        }  



     }



}