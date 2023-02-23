
let stringExemplo = "Fabiano é bonito. Fabiano gosta de assistir futebol";
let novaString = stringExemplo.replace(/Fabiano/g, "Ele");

console.log(novaString)




let juntar = ("063.912.989-71")
let semjuntar = juntar.replace(/\D+/g, '');

 let array = Array.from(semjuntar)

let novoArray = array.slice(0, -2)

console.log(novoArray)


// function ValidaCPF(cpfEnviado){
//   Object.defineProperty(this, 'cpfLimpo', {
//     enumerable: true,
//     get: function (){
//         return cpfEnviado.replace(/\D+/g, '');
//     }
//   })
// }
// ValidaCPF.prototype.valida = function(){
// if(typeof this.cpfLimpo === 'undefined')return false;
// if(this.cpfLimpo.length !== 11) return false;
// if (this.isSequencia()) return false;
// const cpfParcial = this.cpfLimpo.slice(0, -2)
// const digito1 = this.criaDigito(cpfParcial);
// const digito2 = this.criaDigito(cpfParcial + digito1);

// const novoCpf = cpfParcial + digito1 + digito2;

// return novoCpf === this.cpfLimpo;
// }

// ValidaCPF.prototype.isSequencia = function () {
//     const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
//     return sequencia === this.cpfLimpo;
// }

//  ValidaCPF.prototype.criaDigito = function(cpfParcial){
// let cpfArray = Array.from(cpfParcial);

// let regressivo = cpfArray.length + 1;
// let total = cpfArray.reduce((ac, val)=>{
//     ac += (regressivo * Number(val))
//     regressivo--;
//     return ac;
// },0)
// const digito = 11 - (total % 11)
// return digito > 9 ? '0' : String(digito);
// }

// let inputCPF = document.querySelector(".cpf")
// const cpf = new ValidaCPF(inputCPF.value);
// console.log(cpf.valida());



















// // //684393151f44eea088d129fd08a67dee

