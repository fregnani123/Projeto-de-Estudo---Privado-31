
function NovaPagina(){

   this.divPai = document.querySelector(".container");

  this.iniciar = () => {
  this.addDiv1()
  }

  this.criaDiv = function(){
    let div = document.createElement("div")
   return div; 
  }

 this.addDiv1 = () => {
  let div1 = this.criaDiv()
  div1.setAttribute("class","header");
 
  this.divPai.appendChild(div1)
 };
 
  }
  

let novaPagina = new NovaPagina();

novaPagina.iniciar()


