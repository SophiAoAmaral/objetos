function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}
Pessoa.prototype.andar = function(){
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
    return this.nome + ' Pessoa nadou';
}

const sophia = new Pessoa('Sophia', 19);
//console.log(Pessoa.prototype.andar())
///console.log(sophia.andar());
//console.log(sophia.nadar());
//console.log(sophia.toString);

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['c', 'b', 'a'];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);//
//ou
Array.from(lista);
