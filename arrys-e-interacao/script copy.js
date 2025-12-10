// const carros = ['Ford', 'Fiat', 'Honda'];

// const novosCarros= carros.forEach((carro)=>{
//   carro.toLocaleUpperCase()
// })
// console.log(novosCarros)

// const newCarros = carros.map((carro, index)=>{
//    return 'carro ' + carro
// })

// console.log(newCarros)

// const numeros = [2,3,4,5,6,78];
// const numerosx3 = numeros.map(n => n *3)
// console.log(numerosx3)


// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const nomeAulas = aulas.map((aula) => aula.nome)
// console.log(nomeAulas)


// const aulas2 = [10, 25, 30];
// const reduceAulas = aulas2.reduce((acumulador, item )=>{
//   console.log(acumulador,item)
//   return acumulador + item
// },0)
// console.log(reduceAulas);

// const numeros2 = [10, 25, 60, 5, 35, 10];
// const maiorNumero = numeros2.reduce((anterior, atual) =>{
//   if(anterior > atual)
//     return anterior
//   else
//     return atual
// },0)

// console.log

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

console.log(listaAulas);

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = frutas.filter((item)=>{
  return item
})

console.log(arrayFrutas);

const numeros = [1,43,32,1,111,344,566,454]

const maior = numeros.filter((x)=>{
  return x >= 50
})

console.log(maior)