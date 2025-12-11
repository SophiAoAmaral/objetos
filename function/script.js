function perimetro(lado){
  return lado * lado
}

console.log(perimetro(3))

function somar (n1, n2){
  return n1 + n2 
}

console.log(somar.length);

const carro = {
  marca:'Ferrari',
  ano:2021
}

const carro2 = {
  marca:'Audi',
  ano:2022
}
function descricaoCarro(velocidade){
  console.log(this)
  console.log(this.marca + " " + this.ano + velocidade)
}

descricaoCarro.call(carro, 100)
descricaoCarro.call(carro2);

function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul');
ul.ativo('ativar')
console.log(ul);

