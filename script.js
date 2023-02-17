

let form = document.querySelector("#form")
let inputTexto = document.querySelector("#idtexto");
let inputSenha = document.querySelector("#idpassword");


form.addEventListener("submit", (e) => {e.preventDefault()
  naoEnvia()
alert("email enviado")})

function naoEnvia(){
  if(!inputSenha.value || !inputTexto.value){
    alert("insira uma senha valida")
  }
}

// function validarCPF(cpf) {
//   cpf = cpf.replace(/[^\d]+/g,'');
//   if(cpf == '') console.log("cpf invalido");
//   // Elimina CPFs invalidos conhecidos
//   if (cpf.length != 11 ||
//     cpf == "00000000000" ||
//     cpf == "11111111111" ||
//     cpf == "22222222222" ||
//     cpf == "33333333333" ||
//     cpf == "44444444444" ||
//     cpf == "55555555555" ||
//     cpf == "66666666666" ||
//     cpf == "77777777777" ||
//     cpf == "88888888888" ||
//     cpf == "99999999999")
//         return false;
//   // Valida 1o digito
//   add = 0;
//   for (i=0; i < 9; i ++)
//         add += parseInt(cpf.charAt(i)) * (10 - i);
//         rev = 11 - (add % 11);
//         if (rev == 10 || rev == 11)
//             rev = 0;
//         if (rev != parseInt(cpf.charAt(9)))
//             return false;
//   // Valida 2o digito
//   add = 0;
//   for (i = 0; i < 10; i ++)
//         add += parseInt(cpf.charAt(i)) * (11 - i);
//         rev = 11 - (add % 11);
//         if (rev == 10 || rev == 11)
//             rev = 0;
//         if (rev != parseInt(cpf.charAt(10)))
//             return false;
//   return true;
// }

// let novoCpf = validarCPF("")
// console.log(novoCpf)

  //   function validaCPF(cpf){
  //     return cpf.replace(/\D+/g,"")
  //   }

  //  var cpfValido = validaCPF("063.912.989-71")
  //  console.log(cpfValido)


// const h1 = document.querySelector(".h1")
 
// let pessoas = ["Fabiano","Fernanda","Ada"]

// for(let i= 0; i< pessoas.length; i++){
//   console.log(pessoas[i])
// }

// let n = [1,5,8,38,22,58,7,5,65]

// somar = n.reduce((a,b)=>a= a+b,0)
// console.log(somar)  


// let falar = (pessoa) => {
//   console.log(pessoa,"Oi estou falando")
// }

// falar("Fabiano")





















// // const h1 = document.querySelector(".h1")
// // function Produto(item,preco,marca){
// //     this.item = item;
// //     this.preco = preco;
// //     this.marca = marca;

// // }
// // Produto.prototype.desconto = function (desconto) {
// //   this.preco -=  (this.preco  * desconto / 100);
// //   this.preco = this.preco.toLocaleString("pr-BR", {style:"currency",currency:"BRL"})
// //   h1.innerHTML = `Item: ${this.item} <br> Preço: ${this.preco} <br> Marca: ${this.marca} <br> Estoque: ${this.estoque}`
// // }

// // function Eletrodomesticos (item,preco,marca,cor) {
// //     this.cor = cor

// // Produto.call(this,item, preco, marca);
// // Object.defineProperty(this, "estoque", {
// //     enumerable: true,
// //     configurable:false,
// //     get: function(){
// //         return estoque;
// //     },
// //     set: function (valor){
// //         if (typeof valor !== "number" ) {
// //              throw new TypeError("Não é um numero valido!")
// //                 } estoque = valor }
// // })
// // }

// // Eletrodomesticos.prototype = Object.create(Produto.prototype);
// // Eletrodomesticos.prototype.constructor = Eletrodomesticos;


// // let fogao = new Eletrodomesticos("Smart TV 50", 3500.00, "Sansung","Branca");
// // fogao.estoque = 1000


// // fogao.desconto(10);
// // console.log(fogao)























// // function Produto(nome,preco){
// //  this.nome = nome;
// //  this.preco = preco;
// // }
// // Produto.prototype.aumento = function(quantia){
// //     this.preco += quantia;
// // }
// // Produto.prototype.desconto = function(quantia){
// //     this.preco -= (this.preco * (quantia / 100));
// //     this.preco = parseFloat(this.preco.toFixed(2));
// // }

// // function Camiseta(nome, preco,cor){
// //     this.cor = cor
// //     Produto.call(this, nome, preco,cor);
// // }

// // Camiseta.prototype = Object.create(Produto.prototype);
// // Camiseta.prototype.constructor = Camiseta;

// // Camiseta.prototype.desconto = function(quantia) {
// //     this.preco -= (this.preco * (quantia / 100)).toFixed(2);
// // }

// // function Caneca (nome, preco, material,estoque){
// //     Produto.call(this, nome, preco);
// //     this.material = material;

// //     Object.defineProperty(this, "estoque", {
// //      enumerable: true,
// //      configurable:false,
// //     get: function(){
// //         return estoque;
// //     },
// //    set: function(valor){
// //     if (typeof valor !== "number") return
// //     estoque = valor;
// //    }
// // });
// // }

// // Caneca.prototype = Object.create(Produto.prototype);
// // Caneca.prototype.constructor = Caneca;

// // function Ventilador(nome,preco,cor,marca,estoque,){
// //     Produto.call(this, nome,preco)
// //     this.preco.toFixed(2)
// //     this.nome = nome;
// //     this.preco = preco;
// //     this.cor = cor;
// //     this.marca = marca;
// // Object.defineProperty(this, "estoque", {
// //     enumerable:true,
// //     configurable:true,
// //     get: function () {
// //         return estoque;
// //     },
// //     set: function(valor){
// //      if (typeof valor !== "number" ) {
// //         throw new TypeError("Não é um numero valido!")
// //      } estoque = valor
// //     }
// // })

// // }
// // Ventilador.prototype = Object.create(Produto.prototype);
// // Ventilador.prototype.constructor(Ventilador)

// // const camiseta = new Camiseta("regata", 25.50, "preta");

// // const caneca = new Caneca ("caneca", 80.50, "aluminio", 20)

// // const ventilador = new Ventilador("ventilador",89.90,"branca","Arno");
// // camiseta.desconto(10);
// // ventilador.desconto(10)

// // console.log(camiseta);
// // console.log(caneca);
// // console.log(ventilador)






















// // //684393151f44eea088d129fd08a67dee

