/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if (nome !== undefined || idade !== undefined) {
    let frase1 = 'Oi, meu nome é ';
    let frase2 = 'trabalho na Trybe e mando muito em programação!';
   return `${frase1}${nome}!\nTenho ${idade} anos,\n${frase2}\n#VQV!`;
  }
  return undefined;
};

module.exports = vqv;
