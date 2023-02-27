












































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





























