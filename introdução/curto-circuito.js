let n = 0
if (n === 0)
n = 10
console.log(n)

console.log("---------------------")

let y = 0// numero 0 é false
if (!y)//aqui foi definido true para y
y = 20
console.log(y)

console.log("---------------------")


//curto-circuito
let x = 0//false
x = x || 10 // x é igual a 0 ou 10, como 0 é falso então o valor de x passa a ser 10
//se por ventura mudar para let x = 1 passa a ser true ou seja, x = 1 
console.log(x)

//ex 2
let sValido = false
sValido = sValido || "Não é válido" //sempre vai avaliar se é primeira ou segunda opção
console.log(sValido)