let imprimir = document.querySelector(".p")

let pessoas = ['Amanda','Fernanda','Pedro','Augusto','Fabiano'
];

document.addEventListener("click", (e) => {
    let el = e.target;
    if (el.classList.contains("start")){
        let indice = (sorteado(3))
        imprimir.innerHTML = pessoas[indice]
     console.log(indice)
    }
    if (el.classList.contains("clean")){
        limparSorteio()
    }
})
 
function sorteado(i){
 return Math.floor(Math.random() * i );
}

function limparSorteio(){
    imprimir.innerHTML = "Nome Sorteado"
}



// const relogio = document.querySelector(".p");
// const iniciar = document.querySelector(".start");
// const parar = document.querySelector(".stop");
// const zerar = document.querySelector(".clean");
// let segundos = 0;
// let timer;

// function iniciarRelogio(){
//      timer = setInterval(function () {segundos += 1;
//         relogio.innerHTML = criaSegundos(segundos)
//     },1000);
// }

// function criaSegundos(segundos){

// const data = new Date(segundos * 1000);
// return data.toLocaleTimeString("pt-BR",{
// hour12:false,
// timeZone:"UTC"});
// }


// iniciar.addEventListener("click", e => {
//     iniciarRelogio();
//     relogio.classList.remove('pausado');
// });


// parar.addEventListener("click", e => {
//     clearInterval(timer)
//     relogio.classList.add("pausado")
// });



// zerar.addEventListener("click", e => {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     segundos = 0;
// });


// function zeroEsquerda(n){
//  return n >= 10 ? n : `0${n}`
// }










// let pessoas = [
//   {nome: "João", idade: 25, cidade: "São Paulo"},
//   {nome: "Maria", idade: 32, cidade: "Rio de Janeiro"},
//   {nome: "Pedro", idade: 40, cidade: "Belo Horizonte"},
//   {nome: "Ana", idade: 29, cidade: "Curitiba"},
//   {nome: "Lucas", idade: 36, cidade: "Porto Alegre"},
//   {nome: "Julia", idade: 21, cidade: "Brasília"},
//   {nome: "Mateus", idade: 28, cidade: "Salvador"},
//   {nome: "Isabela", idade: 24, cidade: "Fortaleza"},
//   {nome: "Ricardo", idade: 33, cidade: "Goiânia"},
//   {nome: "Vitor", idade: 30, cidade: "Recife"}
// ];

//  const pessoasIdade = pessoas.reduce((acumulador,valor)=> {
//   acumulador += valor.idade;
//   return acumulador
//  },0);

//  console.log(pessoasIdade)





// let numeros = [3, 6, 9, 12, 15, 16, 17, 19, 21, 22]; 

// const numerosMap = numeros.map(n => {
//  return n % 3 == 0 ? n : `${n} not`
// })
// console.log(numerosMap)


// const pessoa = ['fabiano', 'jair', 'pedro'];

// const lista = document.querySelector('.ul')

// function criaTarefa(nomes){
//   const Li =  document.createElement('li');
//   Li.innerText = nomes
//  lista.appendChild(Li)
// }

// for (let nomes of pessoa){
//    criaTarefa(nomes)
// }

// let fazerMap = pessoa.map((e,i,a) => {
//    console.log(e,i,a)
// })







// // const btnMobile = document.querySelector(".btn-mobile");
// // const menuMobile = document.querySelector(".nav");

// // btnMobile.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   menuMobile.classList.toggle("active")
// // })


// // const inputTarefa = document.querySelector(".input-tarefa");
// // const btnTarefa = document.querySelector(".btn-tarefa")
// // const tarefas = document.querySelector(".tarefas");

// // function criaLi(){
// //  const li = document.createElement('li');
// //  return li;
// // }

// // function criaBotaoApagar(li){
// //   li.innerText += " ";
// // const botaoApagar = document.createElement('button');
// // botaoApagar.setAttribute('class','apagar')
// // botaoApagar.innerText = 'Apagar';
// // li.appendChild(botaoApagar);


// // };

// // inputTarefa.addEventListener('keypress', e => {
// //   if(e.keyCode === 13){
// //     if(!inputTarefa.value) return
// //     criaTarefa(inputTarefa.value);
// //   }
// // });

// // function limpaInput(){
// //   inputTarefa.value = "";
// //   inputTarefa.focus();
// // }

// // function criaTarefa(textoInput){
// //  const li = criaLi();
// //  li.innerText = textoInput;
// //  tarefas.appendChild(li);
// //  limpaInput();
// //  criaBotaoApagar(li);
// //  salvarTarefas();
// // }

// // btnTarefa.addEventListener('click', () =>{
// // if(!inputTarefa.value)return;
// // criaTarefa(inputTarefa.value);
// // })

// // document.addEventListener('click', e => {
// //   const el = e.target;
// //   if(el.classList.contains('apagar')){
// //      el.parentElement.remove();
// //      salvarTarefas();
// //   }




// // })

// // function salvarTarefas(){
// //  const liTarefas = tarefas.querySelectorAll('li');
// //  const listadeTarefas = [];
// //  for (let tarefa of liTarefas){
// //  let tarefaTexto = tarefa.innerText;
// //  tarefaTexto = tarefaTexto.replace('Apagar',"").trim()
// // listadeTarefas.push(tarefaTexto);

// //  }
// // const tarefaJSON = JSON.stringify(listadeTarefas);

// // localStorage.setItem('tarefas', tarefaJSON)
// // }
// // function addTarefasSalvas(){
// //   const tarefas = localStorage.getItem('tarefas');
// //  const listaDeTarefas = JSON.parse(tarefas)
// //  for (let tarefa of listaDeTarefas){
// //   criaTarefa(tarefa)
// //  }
// // }
// // addTarefasSalvas()