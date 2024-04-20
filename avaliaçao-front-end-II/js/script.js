// Questão 1

// Declaração das variáveis
let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 1.03; // 3% de crescimento anual
let taxaCrescimentoB = 1.015; // 1.5% de crescimento anual
let anos = 0;

// Simulação do crescimento populacional
while (populacaoA <= populacaoB) {
  populacaoA *= taxaCrescimentoA;
  populacaoB *= taxaCrescimentoB;
  anos++;
}

// Apresentação do resultado
console.log(`O país A ultrapassará a população do país B em ${anos} anos.`);