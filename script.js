
const nomes = ['eduardo', 'Maria','joao', 'maria'];











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



