export default  function funcionamento(){
 const agora = new Date();
 
 console.log(agora.getMonth());


 function transformarDias(tempo){
  return tempo /(24 * 60 * 60 * 1000);
 }
}
