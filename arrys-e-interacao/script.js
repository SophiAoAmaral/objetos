//const carros = ['Ford', 'Fiat', 'Honda']
//carros.forEach((item, index, array)=>{
 // console.log(index, item.toLocaleUpperCase())
//})

const carros = ['Ford', 'Fiat', 'Honda']

 const novaArray = carros.map((item,index, array)=>{
  console.log(item.toUpperCase())
  return item
})
console.log(novaArray)

const numeros = [2,4,5,3,2]
const numerosx2 = numeros.map( n => n *2)
console.log(numerosx2)

const aulas = [
  {nome: 'HTML 1', min: 15},
  {nome: 'HTML 2', min: 10},
  {nome: 'CSS 1', min: 20},
  {nome: 'JS 1', min: 25},
]

const tempoAula = aulas.map(aula => aula.min)

const nomeAulas = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas)


console.log(tempoAula)

const aulas2 = [
  {nome: 'HTML 1', min: 15},
  {nome: 'HTML 2', min: 10},
  {nome: 'CSS 1', min: 20},
  {nome: 'JS 1', min: 25},
]

const listaAulas = aulas.reduce((acumulador, atual, index)=>{
  acumulador[index] = atual.nome;
  console.log(acumulador)
  return acumulador
}, {})