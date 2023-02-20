

function ValidarCpf(cpfEnviado){
Object.defineProperty(this,'cpfLimpo',{
    get: function(){
        return cpfEnviado.replace(/\D+/g, '');
    }
});
}
ValidarCpf.prototype.valida = function(){
     if(typeof this.cpfLimpo === "undefined") return false;
     if(this.cpfLimpo.length !== 11) return false;
     const cpfParcial = this.cpfLimpo.slice(0,-2);
     const digito1 = this.criaDigito(cpfParcial);

    return true;
}
ValidarCpf.prototype.criaDigito = function(cpfParcial){
 const cpfArray = Array.from(cpfParcial)
 const regressivo = cpfArray.length + 1;
 const digito = cpfArray.reduce()

 console.log(cpfArray)
}


const cpf = new ValidarCpf('063.912.989-71')

console.log(cpf.valida())




















// // //684393151f44eea088d129fd08a67dee

