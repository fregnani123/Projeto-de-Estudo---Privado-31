
function NovaPagina(){
   this.divPai = document.querySelector(".container");
   
   this.iniciar = () => {
    let div2 = this.criaDiv()
    div2.setAttribute("class","novaDiv");
    this.divPai.appendChild(div2)
  }

   this.criaDiv = function(){
     let div = document.createElement("div")
    return div; 
   }


  } 


let novaPagina = new NovaPagina();

novaPagina.iniciar()


