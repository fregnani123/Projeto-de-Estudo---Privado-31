
const btnMobile = document.querySelector(".btn-mobile");
const menuMobile = document.querySelector(".nav");

btnMobile.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("active")
})


const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefas = document.querySelector(".tarefas");

function criaLi(){
 const li = document.createElement('li');
 return li;
}

function criaBotaoApagar(li){
  li.innerText += " ";
const botaoApagar = document.createElement('button');
botaoApagar.innerText = 'Apagar';
li.appendChild(botaoApagar);
};

inputTarefa.addEventListener('keypress', e => {
  if(e.keyCode === 13){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput(){
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(textoInput){
 const li = criaLi();
 li.innerText = textoInput;
 tarefas.appendChild(li);
 limpaInput();
}

btnTarefa.addEventListener('click', () =>{
if(!inputTarefa.value)return;
criaTarefa(inputTarefa.value);
})


