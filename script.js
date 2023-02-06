
function NovaPagina(){
   this.menu = ["About","Portfolio","Contact",];

   this.container = document.querySelector(".container");
   
  this.iniciar = () => {
  this.addHeader()
  }

 this.addHeader = function() {
  let header = this.criaDiv();
  let menu = document.createElement("ul");
  header.setAttribute("class","header");
  this.container.appendChild(header);
  header.appendChild(menu);

  for (let i = 0; i < this.menu.length; i++){
     let listaMenu = document.createElement("li")
     listaMenu.innerText = this.menu[i]
     menu.appendChild(listaMenu)
  }}
          
 this.criaDiv = function(){
  let div = document.createElement("div")
 return div; 
};

  }

let novaPagina = new NovaPagina();

novaPagina.iniciar();


