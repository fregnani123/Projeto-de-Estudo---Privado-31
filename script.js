const inputTarefa = document.querySelector(".input-tarefa")
const btnInputTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function(e) {
   if (e.keyCode === 13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
   }
   
})

function limpaInput(){
    inputTarefa.value = ""
    inputTarefa.focus();
}

function criaTarefa(textoInput){
  const li = criaLi();
 li.innerText = textoInput
 tarefas.appendChild(li);
 limpaInput()
 criaBotaoApagar(li)
 salvarTarefas()
}

btnInputTarefa.addEventListener("click", function () {
 if (!inputTarefa.value) return;
 criaTarefa(inputTarefa.value)
}
)

function criaBotaoApagar(li){
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText= "Apagar";
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Excluir tarefa")
    li.appendChild(botaoApagar);
    salvarTarefas()
}

document.addEventListener("click", function(e) {
    const el = e.target;
    if (el.classList.contains("apagar")){
        el.parentElement.remove()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li");
}