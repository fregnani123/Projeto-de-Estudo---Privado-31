
function NovaPagina(){

   this.divPai = document.querySelector(".container");
   
  this.iniciar = () => {
  this.addHeader()
  }

let optionsMenu = ["About","Portfolio","Contact"]

 this.addHeader = () => {
  let div1 = this.criaDiv();
  let ul = this.criaUl();
  let li = this.criaLI();
  let menu = this.menu();
  div1.setAttribute("class","header");
  this.divPai.appendChild(div1);
   div1.appendChild(ul);
   ul.appendChild(li);
   li.innerText += menu;
 };

 this.menu = (li = optionsMenu) => {
  for (let i = 0; i < li.length; i++) {
  console.log(li[i]);
} 
 }
  
 this.criaDiv = function(){
  let div = document.createElement("div")
 return div; 
};
 this.criaUl = () => {
  let ul = document.createElement("ul")
  return ul
};

 this.criaLI = () => {
  let li = document.createElement("li");
  return li;
 };

 
  }

let novaPagina = new NovaPagina();

novaPagina.iniciar();
