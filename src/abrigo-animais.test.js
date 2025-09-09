import { AbrigoAnimais } from './abrigo-animais.js';

describe('Testes do Abrigo de Animais', () => {
  const abrigo = new AbrigoAnimais();

  test('Quando os dois podem adotar, animais vão para o abrigo', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA',
      'RATO,BOLA',
      'REX'
    );
    expect(resultado).toEqual({
      lista: ['REX - abrigo']
    });
  });

  test('Animal inválido deve retornar erro', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA',
      'RATO,BOLA',
      'DRACO'
    );
    expect(resultado).toEqual({
      erro: 'Animal inválido'
    });
  });

  test('Brinquedo inválido deve retornar erro', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,PELUCIA',
      'RATO,BOLA',
      'REX'
    );
    expect(resultado).toEqual({
      erro: 'Brinquedo inválido'
    });
  });

  test('Pessoa 1 adota, pessoa 2 não pode, animais vão para pessoa 1 ou abrigo', () => {
    const resultado = abrigo.encontraPessoas(
      'LASER,RATO,BOLA',
      'RATO,BOLA',
      'REX,BEBE'
    );
    expect(resultado).toEqual({
      lista: ['BEBE - pessoa 1', 'REX - abrigo']
    });
  });

  test('Pessoa 2 adota, pessoa 1 não pode', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA',
      'LASER,RATO,BOLA',
      'REX,BEBE'
    );
    expect(resultado).toEqual({
      lista: ['BEBE - pessoa 2', 'REX - abrigo']
    });
  });

  test('Nenhum pode adotar, todos vão para abrigo', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA',
      'LASER',
      'MIMI'
    );
    expect(resultado).toEqual({
      lista: ['MIMI - abrigo']
    });
  });
});
