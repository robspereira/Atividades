Desenvolvimento de uma tela com JavaScript para um sistema de cadastro de notas de alunos da disciplina de Programação Web.

* Prefácio: Nesse projeto é obrigatório o uso do padrão arquitetural MVC. Você deverá manter o foco em boas práticas e recursos do EcmaScript 6. 
* Use e abuse de recursos de programação orientada a objetos (conceitos como coesão, encapsulamento e código seguro devem permear o desenvolvimento). 
* Também aproveite os recursos de programação funcional (que ajudam a enxugar o código e o deixa mais seguro). Também não deixe de tirar proveito da 
* flexibilidade no uso de "template strings".

* Entrada: Na tela o usuário deverá informar o nome do aluno, primeira nota, segunda nota, percentual de frequência e prova final (caso necessário).
Importante: Todos os dados informados deverão ser validados e notificados.

* Regras de Negócio: O sistema deve efetuar o cálculo da aprovação de alunos, sendo que, para ser aprovado, deve-se ter frequência mínima de 75%. 
* Além disso, para aprovação sem prova final, a média das notas parciais deve ser maior ou igual a 70. Para reprovação direta, esta média deve ser 
* menor que 30. Médias entre 30 (inclusive) e 70 (exclusive) colocam o aluno em prova final. Se a média da prova final com a média anterior for menor 
* que 50, o aluno está reprovado, caso contrário, aprovado.

* Saída: Uma tabela informando o nome do aluno, primeira nota, segunda nota, percentual de frequência, prova final, a média final e situação (Aprovado ou Reprovado).
