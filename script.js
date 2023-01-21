function Calculadora(){
this.display = document.querySelector;

this.capturaCliques = () => {
    document.addEventListener('click', event => {
        const el = event.target;
        console.log(el)
    })
}

this.inicia = () => {
    this.capturaCliques();
}
}






const calculadora = new Calculadora();
calculadora.inicia();