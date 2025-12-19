function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 6000, 'Depois de 1s');


const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick(){
    setTimeout(() => {
        this.style.color = 'blue'
    }, 2000);
}



setTimeout(()=>{
    console.log('testando')
},1000)


//for(let i = 0; i<20; i++){
    //setTimeout(()=>{
     //   console.log(i)
   // },1000 * i)};


