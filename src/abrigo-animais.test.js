import { AbrigoAnimais } from './abrigo-animais';

describe('Testes de validação e duplicados', () => {
  const abrigo = new AbrigoAnimais();

  test('Todas entradas válidas, sem duplicados', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'LASER,NOVELO', 'REX,FOFO');
    expect(resultado.listaBrinquedosPessoa1).toEqual(['RATO', 'BOLA']);
    expect(resultado.listaBrinquedosPessoa2).toEqual(['LASER', 'NOVELO']);
    expect(resultado.listaAnimais).toEqual(['REX', 'FOFO']);
  });

  test('Animal inválido', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'LASER,NOVELO', 'LULU');
    expect(resultado.erro).toBe('Animal inválido');
  });

  test('Brinquedo inválido na pessoa 1', () => {
    const resultado = abrigo.encontraPessoas('RATO,PATINHO', 'LASER,NOVELO', 'REX,FOFO');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Brinquedo inválido na pessoa 2', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'LASER,PATINHO', 'REX,FOFO');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Duplicado em brinquedos da pessoa 1', () => {
    const resultado = abrigo.encontraPessoas('RATO,RATO', 'LASER,NOVELO', 'REX,FOFO');
    expect(resultado.erro).toBe('Brinquedo duplicado na pessoa 1');
  });

  test('Duplicado em brinquedos da pessoa 2', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'LASER,LASER', 'REX,FOFO');
    expect(resultado.erro).toBe('Brinquedo duplicado na pessoa 2');
  });

  test('Duplicado em animais', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'LASER,NOVELO', 'REX,FOFO,REX');
    expect(resultado.erro).toBe('Animal duplicado');
  });
});

