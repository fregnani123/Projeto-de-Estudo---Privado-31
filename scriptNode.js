let args = process.argv.slice(2);

function descontoProduto (preco, desconto) {
    if (args[0] == "d") {
        let produtoDesconto = (preco * desconto) / 100;
        let a = preco - produtoDesconto;
        console.log("O valor do produto com desconto é: ", a);
    }else if(args[0] == 'a'){
        let produtoDesconto = (preco * desconto) / 100;
        let a = preco + produtoDesconto;
        console.log("O valor do produto com acréscimo é: ", a);
    } else {
        console.log("Não foi possível calcular o desconto.");
    }
}

let p = Number(args[1]);
let d = Number(args[2]);

descontoProduto(p,d)