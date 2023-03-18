
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

fetch(urlPokemon).then( response => {
   return response.json()
}).then( data => {
   console.log(data.results[0])
})

function rand(n) {
   n = 3 * 1000;
   return parseInt(Math.random() * n)
}


function esperaAi (msg, tempo){
  return new Promise( (resolve, reject) => {
   setTimeout(() => {
      if(typeof msg !== "string"){
         reject("cat no erro");
         return
      }
      resolve(msg.toLocaleUpperCase() + ` - passei na promese`)
      return;
   },tempo)
  })
}

async function executa(){
  try{
     const fase1 = await esperaAi("fase 1 ", rand());
     console.log(fase1)
     const fase2 =  await esperaAi("fase 2 ", rand());
     console.log(fase2)
     const fase3 = await esperaAi("fase 3 ", rand());
     console.log(fase3)
  } catch (e){
  throw new Error("permitido apenas strings ")
  }
}
executa()

esperaAi("fase 1 ", rand()).then(fase => {
   console.log(fase)
   return esperaAi("fase 2", rand())
}).then(fase => {
   console.log(fase)
   return esperaAi("fase 3", rand())
}).then(fase => {
   console.log(fase)
})

class Produto {
   constructor(name,price,stock){
   this.name = name;
   this.price = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
Object.defineProperty(this, "stock", {
   configurable:true,
   enumerable: true, 
   get: function () {
      return stock;
   },
   set: function(valor){
      if(typeof valor !== 'number'){
         console.log("bad value");
         return;
      }
      stock = valor;
   }
})
   }
}

const newProduct = new Produto("Maça",5.55)
newProduct.stock = 55


console.log(newProduct)


































let volume = document.querySelector(".h1");


class ValidaCPF {
    constructor (cpfEnviado) {
 Object.defineProperty(this, "cpfLimpo", {
    writable: false,
    enumerable: true,
    configurable:false,
    value: cpfEnviado.replace(/\D+/g, '')
 });
    }
    
    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);

    let digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
    let digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
    this.geraNovoCpf = cpfSemDigitos + digito1 + digito2;

    }

   static geraDigito(cpfSemDigitos){
   let total = 0;
   let reverso = cpfSemDigitos.length + 1;
   for(let stringNumerica of cpfSemDigitos){
    total += reverso * Number(stringNumerica)
    reverso--
   }
   const digito = 11 - (total % 11);
   return digito <= 9 ? String(digito) : "0";
    }
    valida(){
        
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== "string") return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf()
        console.log(this.geraNovoCpf)
     return this.geraNovoCpf === this.cpfLimpo
    }
}

const validacpc = new ValidaCPF("063.912.989-71")

 if (validacpc.valida()){
    console.log("CPF válido");
 }else{
    console.log("CPF invalido")
 }





























