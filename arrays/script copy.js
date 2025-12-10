//const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
//const precos = [49, 99, 69, 89];

//const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
 //function andar(nome) { console.log(nome) }];

//const carros = new Array('Ford', 'Fiat', 'Honda');

//carros[2] = 'Ferrari';
//carros[3] = 'Porsche'
//console.log(carros.length)


///const li = document.querySelectorAll('li');

//console.log(Array.isArray(li))// false 
//const arrayLi = Array.from(li)
//console.log(li)
//console.log(arrayLi)

//const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

//console.log(frutas.length)


//instrumentos.sort();//organiza por ordem alfabetica mas se foremm numeros ele vai de numero em numero 1234 sera nessa ordem
//console.log(instrumentos)

const carros = ['Ford', 'Fiat', 'VW'];

console.log(carros.unshift('a'))//(4) ['a', 'Ford', 'Fiat', 'VW']
console.log(carros.push('a', 'Gol'))//(6) ['a', 'Ford', 'Fiat', 'VW', 'a', 'Gol']
console.log(carros.pop())// Gol (5) ['a', 'Ford', 'Fiat', 'VW', 'a']
console.log(carros.shift())// a  (4) ['Ford', 'Fiat', 'VW', 'a']
console.log(carros.reverse())// inverte o array
carros.splice(0,0, 'Kia', 'Mustang' );
console.log(carros)

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item 5'].copyWithin(2, 0, 3))

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3))

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2)
console.log(transportes)

const linguagens = ['html', 'css', 'js', 'php', 'python'];

let htmlString = '<h2>Título Principal</h2>'
htmlString= htmlString.split('h2');
htmlString = htmlString.join('div')
console.log(htmlString)

const phb = linguagens.slice(3)
console.log(phb)