// Retorne um número aleatório
// entre 1050 e 2000
const max = 2000;
const min = 1050;
const numeroAleatorio = (Math.floor(Math.random() * (max - min) + min));
console.log(numeroAleatorio);


console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros  = numeros.split(', ')
console.log(Math.max(...arrayNumeros))//... como se estivesse passando por cada numero


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];



function limparPreco(preco){
  preco = +preco.toUpperCase().trim().replace('R$', '').replace(',', '.');
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco)=>{
  soma += limparPreco(preco)
})
console.log(soma.toLocaleString('pt-BR', {style:"currency", currency:'BRL'}))