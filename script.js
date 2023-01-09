


let data = new Date();
let day = data.getDay();
let monthYaer = data.getMonth();
let years = data.getFullYear();
let monthDay = data.getDate();
console.log(monthDay);

function MesdoAno() {

    monthYaersArray =
    ["January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"]

    if (monthYaer === 0)  return monthYaersArray[0];
    if (monthYaer === 1)  return monthYaersArray[1];
    if (monthYaer === 2)  return monthYaersArray[2];
    if (monthYaer === 3)  return monthYaersArray[3];
    if (monthYaer === 4)  return monthDaydiaMes [4];
    if (monthYaer === 5)  return monthDaydiaMes [5];
    if (monthYaer === 6)  return monthDaydiaMes [6];
    if (monthYaer === 7)  return monthDaydiaMes [7];
    if (monthYaer === 8)  return monthDaydiaMes [8];
    if (monthYaer === 9)  return monthDaydiaMes [9];
    if (monthYaer === 10) return monthDaydiaMes [10];
    if (monthYaer === 11) return monthDaydiaMes [11];}
 

function diaDaSemana() {

    let diaSemana = 
       ["Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];

    if (day === 0) return diaSemana[0];
    if (day === 1) return diaSemana[1];
    if (day === 2) return diaSemana[2];
    if (day === 3) return diaSemana[2];
    if (day === 4) return diaSemana[2];
    if (day === 5) return diaSemana[2];
    if (day === 6) return diaSemana[2];
}

function mostrarNatela() {
    let dataFormatada = diaDaSemana();
    let dataFormatadaDia = MesdoAno()

    let resposta = document.querySelector("#res");
    resposta.innerHTML = `${dataFormatada}, ${dataFormatadaDia} ${monthDay}, ${years}  `
}

mostrarNatela()
