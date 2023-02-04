

let segundos = 0
const h1 = document.querySelector(".h1")


function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {hour12:false,timeZone:"UTC"})
}

console.log(criarHoraDosSegundos())




function zeroAesquerda(n){
 return n>=10 ? n : `0${n}`
}


