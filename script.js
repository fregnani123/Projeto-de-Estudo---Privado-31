
function Pessoa (nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('luiz','miranda')

console.log(p1)


//   const filtrarPares = pessoa.filter((valor) => { return valor.idade % 2 !== 0}); console.log(filtrarPares)

//   const somarIdade = pessoa.reduce((a,b) => a += b.idade, 0)

// function criaId(){
// return Math.round(Math.random() * 100)
// }

// const comIds = pessoa.map((obj, indice) => {
//   const newObj = { ...obj };
//   newObj.id = criaId();
//   return newObj
// })









// class Calculadora {
//     constructor() {
//         this.display = document.querySelector('.display');
//         this.inicia = () => {
//             this.copturaCliques();
//             this.capturaEnter();
//         };

//         this.capturaEnter = () => {
//             this.display.addEventListener("keypress", e => {
//                 if(e.keyCode === 13) 
//                 this.realizaConta();
//             })
//         };
//         this.copturaCliques = () => {
//             document.addEventListener('click', e => {
//                 const el = e.target;
//                 if (el.classList.contains("btn-num"))
//                     this.addNumDisplay(el);
//                 if (el.classList.contains("btn-clear"))
//                     this.clear();
//                 if (el.classList.contains("btn-del"))
//                     this.del(el);
//                 if (el.classList.contains("btn-eq"))
//                     this.realizaConta();
//             });
//         };
//         this.realizaConta = () => {
//             try {
//                 const conta = eval(this.display.value);
//                 if (!conta) {
//                     alert("conta invalida");
//                     return;
//                 };
//                 this.display.value = conta;
//             } catch (res) {
//                 alert("conta invalida");
//                 return;
//             }
//         };

//         this.addNumDisplay = el => {this.display.value += el.innerText; 
//         this.display.focus()}

//         this.clear = () => this.display.value = "";
//         this.del = () => this.display.value = this.display.value.slice(0, -1);
        
//     }
// }

// const calculadora = new Calculadora();
// calculadora.inicia();



