// arquivo: src/abrigo-animais.test.js
import { AbrigoAnimais } from './abrigo-animais';

describe('Testes de ordem correta de brinquedos', () => {
  const abrigo = new AbrigoAnimais();

  test('Pessoa 1 segue ordem correta, pessoa 2 não', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA',  // Pessoa 1
      'BOLA,RATO',  // Pessoa 2
      'REX,FOFO'    // Animais
    );

    expect(resultado.pessoa1Pode).toBe(true);
    expect(resultado.pessoa2Pode).toBe(false);
  });

  test('Ambas pessoas seguem ordem correta', () => {
    const resultado = abrigo.encontraPessoas(
      'BOLA,LASER', // Pessoa 1
      'RATO,BOLA',  // Pessoa 2
      'ZERO,LOCO'
    );

    expect(resultado.pessoa1Pode).toBe(true);
    expect(resultado.pessoa2Pode).toBe(true);
  });

  test('Nenhuma pessoa segue ordem correta', () => {
    const resultado = abrigo.encontraPessoas(
      'LASER,RATO', // Pessoa 1
      'CAIXA,SKATE',// Pessoa 2
      'MIMI,LOCO'
    );

    expect(resultado.pessoa1Pode).toBe(false);
    expect(resultado.pessoa2Pode).toBe(false);
  });

  test('Ordem intercalada ainda válida', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,SKATE,BOLA', // Pessoa 1
      'CAIXA,NOVELO',    // Pessoa 2
      'FOFO,BEBE'
    );

    expect(resultado.pessoa1Pode).toBe(true);  // RATO e BOLA estão na ordem correta mesmo intercalando SKATE
    expect(resultado.pessoa2Pode).toBe(true);
  });
});
