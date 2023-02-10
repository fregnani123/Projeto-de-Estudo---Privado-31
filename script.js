
//caneta, camisa

function Produto(nome,preco){
 this.nome = nome;
 this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= (this.preco * (quantia / 100));
}

function Camiseta(nome, preco,cor){
    this.cor = cor
    Produto.call(this, nome, preco,cor);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.desconto = function(quantia) {
    this.preco -= (this.preco * (quantia / 100));
}

function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, "estoque", {
     enumerable: true,
     configurable:false,
    get: function(){
        return estoque;
    },
   set: function(valor){
    if (typeof valor !== "number") return
    estoque = valor;
   }
});
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta("regata", 25.50, "preta");

const caneca = new Caneca ("caneca", 80.50, "aluminio", 20)


camiseta.desconto(10)

console.log(camiseta)

console.log(caneca.estoque)
console.log(caneca)






















//684393151f44eea088d129fd08a67dee

