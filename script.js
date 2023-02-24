
let volume = document.querySelector(".p");
const MAX_VOLUME = 20;

function aumentarVolume(e) {
    let event = e.target;
    if (event.classList.contains("mais")) {
        if (volume.innerText.length < MAX_VOLUME) {
            volume.innerText += "|";
        }
    }
    if (event.classList.contains("menos")) {
        let volumeText = volume.innerText;
        if (volumeText.length > 0) {
            volume.innerText = volumeText.substring(0, volumeText.length - 1);
        }
    }
}

document.addEventListener("click", aumentarVolume);































// let stringExemplo = "Fabiano é bonito. Fabiano gosta de assistir futebol";
// let novaString = stringExemplo.replace(/[aeiou]/g, "*");

// console.log(novaString)

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

