console.log(Number.isNaN(NaN));
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.4));


console.log(Number.parseFloat('222.32'))
console.log(parseFloat('232323'))
console.log(parseFloat('100 reais'))//se o caracter for depois do numero ele retorna
console.log(parseInt('99.50'))//arredonda


const preco = 2.99;
const preco1 = 2.323211;
console.log(preco.toFixed())//3
console.log(preco1.toFixed(3))//2.323

let preco2 = 69.90

console.log(preco2.toLocaleString('pt-BR', {style:'currency', currency:'BRL' }));

console.log(preco2.toLocaleString('en-US', {style:'currency', currency:'USD' }));

console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.ceil(5.2))// sempre arredonda p cima
console.log(Math.floor(5.2))// sempre arredonda p baixo
console.log(Math.round(5.2))// arredonda igual a matematica normal

console.log(Math.max(12,32,45,2,31,324));//324
console.log(Math.min(12,32,45,2,31,324));//2
console.log(Math.random());
console.log(Math.random() *100)// 0 a 100
console.log(Math.random() *500)// 0 a 500

const aleatorio = Math.floor(Math.random() *500)//arredonda o valor aleatorio
console.log(aleatorio)


console.log(Math.random() * (20 - 10 +1) +10);
//Math.floor(Math.random() * (max - min + 1)) + min;