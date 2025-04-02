const AnaliseDeDados = require('../src/analiseDeDados');

describe('Testes da classe AnaliseDeDados', () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([10, 15, 20, 25, 30]);
  });

  test('Deve adicionar novos dados corretamente', () => {
    analise.adicionarDados([35, 40]);
    expect(analise.dados).toEqual([10, 15, 20, 25, 30, 35, 40]);
  });

  test('Deve lançar erro ao adicionar dados que não sejam array', () => {
    expect(() => analise.adicionarDados(12)).toThrow("Os dados devem ser um array.");
  });

  test('Deve limpar os dados corretamente', () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test('Deve ordenar os dados corretamente', () => {
    analise.adicionarDados([5, 50]);
    expect(analise.ordenarDados()).toEqual([5, 15, 20, 25, 30, 50]);
  });

  test('Deve calcular a média corretamente', () => {
    expect(analise.calcularMedia()).toBe(20);
  });

  test('Deve calcular a mediana corretamente', () => {
    expect(analise.calcularMediana()).toBe(20);
  });

  test('Deve calcular a moda corretamente', () => {
    analise.adicionarDados([15, 15, 25]);
    expect(analise.calcularModa()).toEqual([15]);
  });

  test('Deve calcular a variância corretamente', () => {
    expect(analise.calcularVariancia()).toBe(50);
  });

  test('Deve calcular o desvio padrão corretamente', () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(7.071, 3);
  });

  test('Deve encontrar o valor mínimo corretamente', () => {
    expect(analise.encontrarMinimo()).toBe(10);
  });

  test('Deve encontrar o valor máximo corretamente', () => {
    expect(analise.encontrarMaximo()).toBe(30);
  });

  test('Deve normalizar os dados corretamente', () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test('Deve calcular o percentil corretamente', () => {
    expect(analise.calcularPercentil(50)).toBe(20);
  });

  test('Deve calcular a soma corretamente', () => {
    expect(analise.calcularSoma()).toBe(100);
  });

  test('Deve calcular o produto corretamente', () => {
    expect(analise.calcularProduto()).toBe(22500000);
  });

  test('Deve calcular a amplitude corretamente', () => {
    expect(analise.calcularAmplitude()).toBe(20);
  });

  test('Deve calcular o coeficiente de variação corretamente', () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(35.36, 2);
  });

  test('Deve remover outliers corretamente', () => {
    analise.adicionarDados([100]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([10, 15, 20, 25, 30]);
  });

  test('Deve calcular a correlação corretamente', () => {
    const outroConjunto = [12, 18, 24, 30, 36];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1, 3);
  });

  test('Deve retornar null para correlação com conjuntos de tamanhos diferentes', () => {
    const outroConjunto = [12, 18, 24];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeNull();
  });
});
//////