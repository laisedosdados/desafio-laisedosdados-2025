class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    //Transformando os parâmetros em array
    const b1 = brinquedosPessoa1.split(',').map(x => x.trim());
    const b2 = brinquedosPessoa2.split(',').map(x => x.trim());
    const animais = ordemAnimais.split(',').map(x => x.trim());
    console.log(b1, b2, animais); // apenas para testar
    return { lista: [] };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
