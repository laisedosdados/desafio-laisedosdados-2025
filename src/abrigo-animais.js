class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, animaisOrdem) {
    // Transformar e padronizar os parâmetros
    const b1 = brinquedosPessoa1.split(',').map(x => x.trim().toUpperCase());
    const b2 = brinquedosPessoa2.split(',').map(x => x.trim().toUpperCase());
    const animais = animaisOrdem.split(',').map(x => x.trim().toUpperCase());

    // Listas válidas
    const listaAnimais = ["REX", "MIMI", "FOFO", "ZERO", "BOLA", "BEBE", "LOCO"];
    const listaBrinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

    // Função para verificar duplicados
    const temDuplicado = arr => new Set(arr).size !== arr.length;

    // Validação básica
    if (b1.concat(b2).some(b => !listaBrinquedos.includes(b))) return { erro: "Brinquedo inválido" };
    if (animais.some(a => !listaAnimais.includes(a))) return { erro: "Animal inválido" };
    if (temDuplicado(b1) || temDuplicado(b2)) return { erro: "Brinquedo inválido" };
    if (temDuplicado(animais)) return { erro: "Animal inválido" };

    // Ordens corretas de brinquedos
    const ordens = {
      "REX": ["RATO", "BOLA"], "MIMI": ["BOLA", "LASER"], "FOFO": ["BOLA", "RATO", "LASER"],
      "ZERO": ["RATO", "BOLA"], "BOLA": ["CAIXA", "NOVELO"], "BEBE": ["LASER", "RATO", "BOLA"],
      "LOCO": ["SKATE", "RATO"]
    };

    // Classificação especial
    const gatos = ["MIMI", "FOFO", "ZERO"];
    const jabuti = ["LOCO"];
    let adotados1 = 0, adotados2 = 0;
    const resultado = [];

    // Verifica se pessoa pode adotar
    const podeAdotar = (brinquedos, animal) => {
      let i = 0;
      for (const b of brinquedos) {
        if (b === ordens[animal][i]) i++;
        if (i === ordens[animal].length) return true;
      }
      return false;
    };

    for (const animal of animais) {
      const p1 = podeAdotar(b1, animal);
      const p2 = podeAdotar(b2, animal);

      if (p1 && p2) resultado.push(`${animal} - abrigo`);
      else if (p1 && adotados1 < 3) {
        resultado.push((gatos.includes(animal) || (jabuti.includes(animal) && animais.length <= 1)) ? `${animal} - abrigo` : `${animal} - pessoa 1`);
        if (!gatos.includes(animal) && !(jabuti.includes(animal) && animais.length <= 1)) adotados1++;
      }
      else if (p2 && adotados2 < 3) {
        resultado.push((gatos.includes(animal) || (jabuti.includes(animal) && animais.length <= 1)) ? `${animal} - abrigo` : `${animal} - pessoa 2`);
        if (!gatos.includes(animal) && !(jabuti.includes(animal) && animais.length <= 1)) adotados2++;
      }
      else resultado.push(`${animal} - abrigo`);
    }

    return { lista: resultado.sort() };
  }
}

// Export para Jest
export { AbrigoAnimais as AbrigoAnimais };
