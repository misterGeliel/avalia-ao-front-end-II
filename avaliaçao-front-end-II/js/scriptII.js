// Questão 2

// Função para verificar se um número é par
function isPar(numero) {
    return numero % 2 === 0;
  }
  
  // Programa principal
  let quantidadePares = 0;
  let quantidadeImpares = 0;
  
  // Pegar 10 números do usuário
  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
  
    // Verificar se o número é par ou ímpar e atualizar os contadores
    if (isPar(numero)) {
      quantidadePares++;
    } else {
      quantidadeImpares++;
    }
  }
  
  // Mostrar os resultados
  console.log(`Quantidade de números pares: ${quantidadePares}`);
  console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);