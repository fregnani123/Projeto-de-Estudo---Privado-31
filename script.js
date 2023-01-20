
let resposta = document.querySelector(".res");

document.addEventListener("click", function(e) {
   const el = e.target;
 let numeros =  parseInt(el.innerText);
   resposta.innerHTML += numeros
  console.log(numeros)
   })