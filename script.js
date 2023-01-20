
let tarefas = document.querySelector(".tarefas");

const liTarefas = tarefas.querySelectorAll("li")
const listaDeTarefas = []

for(lista of liTarefas){
    let listaTarefa = lista.innerText
    listaDeTarefas.push(listaTarefa)
}

const listaJSON = JSON.stringify(listaDeTarefas)

listaJSON.replace("Apagar", "")

console.log(listaJSON)

localStorage.setItem("lista", listaJSON)