
function Car(marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;

    this.getInfo = function(){
    return this.marca + " " + this.modelo + " " + this.ano}
};

const myCar = new Car("Fusca","Hat","69");

console.log(myCar.getInfo())
