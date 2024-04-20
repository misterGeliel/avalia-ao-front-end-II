// Questão 5

function calcularCirculo(raio) {
    // Definindo constantes
    const PI = Math.PI;
  
    // Calculando área
    const area = PI * raio * raio;
  
    // Calculando perímetro
    const perimetro = 2 * PI * raio;
  
    // Retornando um objeto com área e perímetro
    return {
      area,
      perimetro
    };
  }