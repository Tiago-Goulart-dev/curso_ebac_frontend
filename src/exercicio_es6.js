class Aluno{
    constructor(nomeAluno, notaAluno){
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const alunos = [new Aluno('Tiago',5), new Aluno('Gabriel',5), new Aluno('Henrique',8), new Aluno('Kauan', 6), new Aluno('Marcela', 9)];

/* console.log(alunos);

console.log(alunos[0].nota); */

function aprovados(){
    let alunosAprovados =[];
    for(let i=0; i < alunos.length; i++){
        let notaTemp = alunos[i].nota;
        /* console.log(notaTemp); */
        if (notaTemp >=6){
            alunosAprovados.push(alunos[i].nome);
        }
    }
    console.log(alunosAprovados);
}

aprovados();