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

    // ORDENS CORRETAS DE BRINQUEDOS
    const ordensCorretas = [
      ["RATO", "BOLA"],
      ["BOLA", "LASER"],
      ["BOLA", "RATO", "LASER"],
      ["RATO", "BOLA"],
      ["CAIXA", "NOVELO"],
      ["LASER", "RATO", "BOLA"],
      ["SKATE", "RATO"]
    ];

    // Função que verifica se os brinquedos seguem alguma ordem correta
    const podeAdotar = (ordensCorretas, chuteUsuario) => {
      for (const ordem of ordensCorretas) {
        let indice = 0;
        for (const brinquedo of chuteUsuario) {
          if (brinquedo === ordem[indice]) {
            indice++;
          }
          if (indice === ordem.length) {
            return true;
          }
        }
      }
      return false;
    };

    // Verificando para cada pessoa
    const pessoa1Pode = podeAdotar(ordensCorretas, b1);
    const pessoa2Pode = podeAdotar(ordensCorretas, b2);
    return {
      pessoa1Pode,
      pessoa2Pode
    };
  }
}

// Export para Jest
export { AbrigoAnimais };

