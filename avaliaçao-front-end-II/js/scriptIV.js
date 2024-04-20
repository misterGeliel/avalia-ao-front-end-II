// Questão 4

// Constantes
const anoContratacao = 1995;
const salarioInicial = 1000.00;
const aumentoInicial = 1.5; // Percentual inicial de aumento (1996)

// Variáveis
let anoAtual = 2024; // Ano atual (pode ser alterado para outro valor)
let salarioAtual = salarioInicial; // Salário inicial

// Cálculo do aumento salarial ano a ano
for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
  let percentualAumento;
  if (ano === anoContratacao + 1) {
    percentualAumento = aumentoInicial; // Aumento inicial (1996)
  } else {
    percentualAumento = percentualAumento * 2; // Dobra a cada ano subsequente
  }

  // Aumenta o salário atual com a porcentagem calculada
  salarioAtual = salarioAtual * (1 + percentualAumento / 100);
}

// Exibe o salário atual
console.log(`Salário atual (ano ${anoAtual}): R$ ${salarioAtual.toFixed(2)}`);

// Função para calcular o salário atual
function calcularSalarioAtual(anoContratacao, salarioInicial, anoAtual) {
  let salarioAtual = salarioInicial;

  for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    let percentualAumento;
    if (ano === anoContratacao + 1) {
      percentualAumento = 1.5; // Aumento inicial (1996)
    } else {
      percentualAumento = percentualAumento * 2; // Dobra a cada ano subsequente
    }

    salarioAtual = salarioAtual * (1 + percentualAumento / 100);
  }

  return salarioAtual;
}

// Solicita o salário inicial ao usuário
let salarioInicialUsuario = parseFloat(prompt("Digite o salário inicial (R$):"));

// Calcula e exibe o salário atual
let salarioAtualCalculado = calcularSalarioAtual(anoContratacao, salarioInicialUsuario, anoAtual);
console.log(`Salário atual (ano ${anoAtual}): R$ ${salarioAtualCalculado.toFixed(2)}`);