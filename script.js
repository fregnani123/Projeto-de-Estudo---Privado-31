

const pessoa = ['fabiano', 'jair', 'pedro'];

const lista = document.querySelector('.ul')

function criaTarefa(nomes){
  const Li =  document.createElement('li');
  Li.innerText = nomes
 lista.appendChild(Li)
}

for (let nomes of pessoa){
   criaTarefa(nomes)
}































// const btnMobile = document.querySelector(".btn-mobile");
// const menuMobile = document.querySelector(".nav");

// btnMobile.addEventListener("click", (e) => {
//   e.preventDefault();
//   menuMobile.classList.toggle("active")
// })


// const inputTarefa = document.querySelector(".input-tarefa");
// const btnTarefa = document.querySelector(".btn-tarefa")
// const tarefas = document.querySelector(".tarefas");

// function criaLi(){
//  const li = document.createElement('li');
//  return li;
// }

// function criaBotaoApagar(li){
//   li.innerText += " ";
// const botaoApagar = document.createElement('button');
// botaoApagar.setAttribute('class','apagar')
// botaoApagar.innerText = 'Apagar';
// li.appendChild(botaoApagar);


// };

// inputTarefa.addEventListener('keypress', e => {
//   if(e.keyCode === 13){
//     if(!inputTarefa.value) return
//     criaTarefa(inputTarefa.value);
//   }
// });

// function limpaInput(){
//   inputTarefa.value = "";
//   inputTarefa.focus();
// }

// function criaTarefa(textoInput){
//  const li = criaLi();
//  li.innerText = textoInput;
//  tarefas.appendChild(li);
//  limpaInput();
//  criaBotaoApagar(li);
//  salvarTarefas();
// }

// btnTarefa.addEventListener('click', () =>{
// if(!inputTarefa.value)return;
// criaTarefa(inputTarefa.value);
// })

// document.addEventListener('click', e => {
//   const el = e.target;
//   if(el.classList.contains('apagar')){
//      el.parentElement.remove();
//      salvarTarefas();
//   }
// })

// function salvarTarefas(){
//  const liTarefas = tarefas.querySelectorAll('li');
//  const listadeTarefas = [];
//  for (let tarefa of liTarefas){
//  let tarefaTexto = tarefa.innerText;
//  tarefaTexto = tarefaTexto.replace('Apagar',"").trim()
// listadeTarefas.push(tarefaTexto);

//  }
// const tarefaJSON = JSON.stringify(listadeTarefas);

// localStorage.setItem('tarefas', tarefaJSON)
// }
// function addTarefasSalvas(){
//   const tarefas = localStorage.getItem('tarefas'); 
//  const listaDeTarefas = JSON.parse(tarefas)
//  for (let tarefa of listaDeTarefas){
//   criaTarefa(tarefa)
//  }
// }
// addTarefasSalvas()

