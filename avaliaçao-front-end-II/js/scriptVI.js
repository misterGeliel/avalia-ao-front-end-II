// Questão 6

function calcularRetornoInvestimento(capitalInicial, tempoMeses, taxaJurosMensal) {
    // Validação dos dados
    if (capitalInicial <= 0 || isNaN(capitalInicial)) {
      throw new Error("O capital inicial deve ser um número positivo.");
    }
    if (tempoMeses <= 0 || isNaN(tempoMeses)) {
      throw new Error("O tempo de investimento deve ser um número positivo em meses.");
    }
    if (taxaJurosMensal <= 0 || isNaN(taxaJurosMensal)) {
      throw new Error("A taxa de juros mensal deve ser um número positivo em porcentagem.");
    }
  
    // Cálculo do retorno do investimento
    const taxaJurosDecimal = taxaJurosMensal / 100;
    const retorno = capitalInicial * Math.pow(1 + taxaJurosDecimal, tempoMeses);
  
    // Formatação do resultado com duas casas decimais
    const resultadoFormatado = retorno.toFixed(2);
  
    return `O retorno do investimento após ${tempoMeses} meses é de R$ ${resultadoFormatado}.`;
  }
  
  // Exemplo de uso
  try {
    const capitalInicial = parseFloat(prompt("Informe o valor do capital inicial:"));
    const tempoMeses = parseInt(prompt("Informe o tempo de investimento em meses:"));
    const taxaJurosMensal = parseFloat(prompt("Informe a taxa de juros mensal em porcentagem:"));
  
    const resultado = calcularRetornoInvestimento(capitalInicial, tempoMeses, taxaJurosMensal);
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }