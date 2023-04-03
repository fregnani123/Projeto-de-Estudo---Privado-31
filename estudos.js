
let n = [15,55,78,1,5,8,9,44,52,12]
let reverso = n.length - 9; 
let total = 0;
for (numeros of n){
    total += numeros * reverso
    console.log(numeros + "X " + reverso,numeros * reverso, total)
   ++reverso
}
