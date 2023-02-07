
function criaSegundos(segundos){
let data = new Date(segundos * 1000)
return data.toLocaleTimeString("pt-BR",{
  hour12:false, timeZone:"UTC"
})
}
criaSegundos()
 
let display = document.querySelector(".h1");

let segundos = 0
let timer;

function iniciarCronometro(){
 timer = setInterval(() => {segundos++;
 display.innerHTML = criaSegundos(segundos)},1000)
}

function zerarCronometro(){
  clearInterval(timer)
  display.innerHTML = "00:00:00"
  segundos = 0
}

function parar(){
  clearTimeout(timer)
}


































// function NovaPagina(){

//    this.menu = ["About","Portfolio","Contact",];
//    this.colorListaMenu = "white";
//    this.colorMenu = "black"

//    this.container = document.querySelector(".container");
   
//   this.iniciar = () => {
//   this.addHeader()
//   this.criaUl()
//   }

//  this.addHeader = function() {
//   let header = this.criaDiv();
//   let ul = this.criaUl()
//   header.setAttribute("class","header");
//   this.container.appendChild(header);
//   header.appendChild(ul);

//   for (let i = 0; i < this.menu.length; i++){
//      let listaMenu = document.createElement("li")
//      listaMenu.innerHTML= this.menu[i]
//      listaMenu.style.color = this.colorListaMenu;
//      ul.appendChild(listaMenu)
//   }
// }

// this.criaUl = function (){
//   let ul = document.createElement("ul");
//   ul.style.display = "flex";
//   ul.style.gap = "20px";
//   ul.style.listStyle = "none";
//   ul.style.fontSize = "20px"
//   return ul
// }
      
//  this.criaDiv = function(){
//   let div = document.createElement("div");
//   div.style.background = this.colorMenu
//  return div; 
// };


//   }

// const novaPagina = new NovaPagina();

// novaPagina.iniciar();


