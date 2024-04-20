// Questão 3

function encontrarMenorMaiorSoma(numeros) {
    // Inicializando variáveis
    let menor = numeros[0];
    let maior = numeros[0];
    let soma = 0;
  
    // Percorrendo o array
    for (let numero of numeros) {
      // Atualizando menor valor
      if (numero < menor) {
        menor = numero;
      }
  
      // Atualizando maior valor
      if (numero > maior) {
        maior = numero;
      }
  
      // Somando valores
      soma += numero;
    }
  
    // Retornando resultado
    return {
      menor,
      maior,
      soma
    };
  }
  
  // Exemplo de uso
  let numeros = [5, 2, 4, 1, 3];
  let resultado = encontrarMenorMaiorSoma(numeros);
  
  console.log("Menor valor:", resultado.menor);
  console.log("Maior valor:", resultado.maior);
  console.log("Soma dos valores:", resultado.soma);