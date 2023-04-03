

let n = [15,55,78,1,5,8,9,44,52,12]; 
let div = document.querySelector('div')
let ul = document.createElement('ul')

let number = n.map(valor => {
   let li = criaLI()
   li.innerText = valor * 2;
   ul.appendChild(li)
   div.appendChild(ul)
   return div
})

function criaLI(){
    let li = document.createElement('li');
    return li;
}





// let n = [15,55,78,1,5,8,9,44,52,12]

// let resultado = n.reduce((a,e)=> {
//     return( a + e ) 
// },0)
// console.log(resultado)

// let n = [15,55,78,1,5,8,9,44,52,12]
// let reverso = n.length - 9; 
// let total = 0;
// for (numeros of n){
//     total += numeros * reverso
//     console.log(numeros + "X " + reverso,numeros * reverso, total)
//    ++reverso
// }
