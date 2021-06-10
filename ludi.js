const banana = {
  t: 2,
  q: 2.5,
  SEXTA: 3
}


const maca = {
  t: 3,
  q: 2,
  SEXTA: 4
}


const mamao = {
  t: 4,
  q: 3.5,
  SEXTA: 2
}

const pp = (bananas, apple, mamao) => {

  let vt = banana.t*bananas + maca.t*apple + mamao.t*mamao;
  let vq = banana.q*bananas + maca.q*apple + mamao.q*mamao;
  let ValorSabado = banana.SEXTA*bananaSEXTA + maca.SEXTA*quantidaDeMaca + mamao.s*mamao;
  
  let t
  if(vt < vq  && (vt < vs)){
    t = vt

    return `Terca, ${t}`
  }
  if(vq < vs){
    t = vq
    return `Quinta, ${t}`
  }
  if(vs < vt){
    t = ValorSabado
    return `Sabado, ${t}`
  }
  
  return "Não tem dia mais barato"

}


console.log(pp(4, 3, 2));