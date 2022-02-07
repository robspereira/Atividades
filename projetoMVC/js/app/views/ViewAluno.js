class ViewAluno extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(aluno) {

        return `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Aluno</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Média</th>
                    <th>Presença (%)</th>
                    <th>Média final</th>
                    <th>Situação</th>
                </tr>
            </thead>
        
            <tbody>
                ${aluno.getItens().map(item => `
                    
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.nota1}</td>
                        <td>${item.nota2}</td>
                        <td>${item.getMedia()}</td>
                        <td>${item.frequencia}</td>
                        <td>${item.getFinal()}</td>
                        <td>${item.definirSituacao()}</td
                    </tr>
                    
                `).join('')}                
            </tbody>
            
        </table>
        `;
    }
}



/*
<tfoot>
                <td colspan="3">Total</td>
                <td>
                    ${(pedido.getItens().reduce((total, item) => 
                                                total + item.getSubTotal(), 0.0)).toFixed(2)}
                </td>
            </tfoot>
*/