//toFixed
//coloca o numero de casas decimais que eu desejar
//obs: quando não tem casas decimal ele coloca
//obs: transforma em uma string
let numero = 1234567.8
console.log(numero)
console.log(numero.toFixed(3))
console.log(typeof numero.toFixed(3))

//toPrecision
//Diz respeito ao numero de digito dos inteiros, no caso ele aproxima ou arredonda os numeros
console.log(numero.toPrecision(9))
console.log(typeof  numero.toPrecision(7))

//toString 
//transforma numero em string
let numero2 = 123
console.log(numero.toString())
console.log(typeof numero.toString())

//em exadecimal
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
//binário
console.log((15).toString(16))
console.log((16).toString(16))
console.log((17).toString(16))

//IsNaN
//testa se uma string pode ser convertida para numero

let numeroIsStirng = "1jujjj556"
console.log(parseFloat(numeroIsStirng))
console.log(typeof (numeroIsStirng))
console.log(isNaN(numeroIsStirng))


