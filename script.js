
//caneta, camisa

function Produto(nome,preco,cor){
 this.nome = nome;
 this.preco = preco;
 this.cor= cor;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco,cor){
    Produto.call(this, nome, preco,cor);
}

const camiseta = new Camiseta("regata", 25.50, "preta")

console.log(camiseta)






















//684393151f44eea088d129fd08a67dee

