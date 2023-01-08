


let data = new Date();
let day = data.getDay();
const month = data.getMonth();
let years = data.getFullYear();
let monthDay = data.getDate();


function diaDoMes(){
  let diaMes = []

}

function diaDaSemana(){

let diaSemana = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

if (day === 0 ) return diaSemana[0]
if (day === 1 ) return diaSemana[1]}

function mostrarNatela(){
 let dataFormatada = diaDaSemana()

 let resposta = document.querySelector("#res");
 resposta.innerHTML = `${dataFormatada}, ${monthDay} de`}

mostrarNatela()
