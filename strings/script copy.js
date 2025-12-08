const comida = 'Pizza';

console.log(comida.length);

const frase1 = 'A melhor comida';
console.log(frase1[2])
console.log(frase1.charAt(2))

const melhorComida = frase1.concat(' ', comida);
console.log(melhorComida)

const frutas = 'Banana';
const litraFrutas= 'Melancia, Banana, Laranja';
console.log(litraFrutas.includes(frutas));

console.log(frutas.startsWith('ba'));//é case Sensitive
console.log(frutas.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3))
console.log(transacao1.slice(2,5));//do 2 ate o 5
console.log(transacao2.slice(0,8))//do 0 ate o 8
console.log(transacao1.slice(3))//corta os 3  primeiros caracteres;
console.log(transacao1.slice(-5))//5 ultimos caracteres

console.log(frutas.indexOf('n'));//primeiro n que aparecer
console.log(frutas.lastIndexOf('na'))//vai pegar o anterior



const preco = 'R$99';
console.log(preco.padStart(20, '.'))

const listaPreco = ['R$ 99', 'R$ 991', 'R$ 9920'];

listaPreco.forEach((item)=>{   
console.log(item.padStart(20))
});

const frase = 'ta'
console.log(frase.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens)

let preco2 = 'R$ 1200,43';
preco2 = preco2.replace(',', '.'); // 'R$ 1200.43'

console.log(preco2)


const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');//<section>O melhor item</section><section>A melhor lista</section>

console.log(novoHtml);

console.log(htmlArray);//(5) ['<', '>O melhor item</', '><', '>A melhor lista</', '>']

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
frutasArray.join('a')//'BananaaMelanciaaLaranja' junta os itens


const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLocaleLowerCase() === 'feminino');
console.log(sexo1.toUpperCase() === 'FEMININO');

const value = '   R$23.00';
console.log(value)//   R$23.00
console.log(value.trim())//R$23.00
