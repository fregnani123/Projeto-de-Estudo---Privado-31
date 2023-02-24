
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

    valida(){
        
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== "string") return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false
        return "cheguei aqui"
    }
}

const validacpc = new ValidaCPF("063.912.989-71")
console.log(validacpc.valida());




























