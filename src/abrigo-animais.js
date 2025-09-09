class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, animaisOrdem) {
    // Transformando os parâmetros em arrays e padronizando para maiúsculas
    const b1 = brinquedosPessoa1.split(',').map(x => x.trim().toUpperCase());
    const b2 = brinquedosPessoa2.split(',').map(x => x.trim().toUpperCase());
    const animais = animaisOrdem.split(',').map(x => x.trim().toUpperCase());

    // Listas válidas
    const listaAnimais = ["REX", "MIMI", "FOFO", "ZERO", "BOLA", "BEBE", "LOCO"];
    const listaBrinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

    // Função para verificar duplicados
    const temDuplicado = (array) => new Set(array).size !== array.length;

    // Validando brinquedos da pessoa 1
    for (const brinquedo of b1) {
      if (!listaBrinquedos.includes(brinquedo)) {
        return { erro: "Brinquedo inválido" };
      }
    }

    // Validando brinquedos da pessoa 2
    for (const brinquedo of b2) {
      if (!listaBrinquedos.includes(brinquedo)) {
        return { erro: "Brinquedo inválido" };
      }
    }

    // Validando animais
    for (const animal of animais) {
      if (!listaAnimais.includes(animal)) {
        return { erro: "Animal inválido" };
      }
    }

    // Verificando duplicados
    if (temDuplicado(b1)) return { erro: "Brinquedo duplicado na pessoa 1" };
    if (temDuplicado(b2)) return { erro: "Brinquedo duplicado na pessoa 2" };
    if (temDuplicado(animais)) return { erro: "Animal duplicado" };

    // Retorna as listas processadas (teste visual)
    return {
      listaBrinquedosPessoa1: b1,
      listaBrinquedosPessoa2: b2,
      listaAnimais: animais
    };
  }
}

// Export correto para Jest
export { AbrigoAnimais as AbrigoAnimais };


