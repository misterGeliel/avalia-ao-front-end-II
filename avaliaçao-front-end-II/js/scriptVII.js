// Questão 7

function calculaMediaAlunos(alunos) {
    // Filtra os alunos com média igual ou superior a 7
    const alunosFiltrados = alunos.filter(aluno => calculaMediaAluno(aluno.notas) >= 7);
  
    // Itera sobre cada aluno filtrado
    for (const aluno of alunosFiltrados) {
      const media = calculaMediaAluno(aluno.notas);
      console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Curso: ${aluno.curso}`);
    }
  }
  
  // Função auxiliar para calcular a média das notas de um aluno
  function calculaMediaAluno(notas) {
    const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return somaNotas / notas.length;
  }
  
  // Executa a função principal
  calculaMediaAlunos(alunos);