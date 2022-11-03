
//como não foi declarado nenhum valor a variável ela será exibida como undefined
var teste
let teste2
console.log(teste)
console.log(teste2)

//quando eu quero criar uma variável e não quero atribuir valor a ela devo defini-la como null
var teste4 = null
console.log(teste4)

//incremento de varáveis
var incremento = 0
var incremento2 = 0
//primeiro mostra o valor original, depois acrescenta
console.log("incremento++: "+ incremento++)
console.log("incremento: "+ incremento)

//primeiro acrescente, depois soma 
console.log("++incremento2: " + ++incremento2)
console.log("incremento2++: " + incremento2)

//operador ternário
//como se fosse um if, usado em expressões onde ou é uma coisa ou outra.
let idade = 25
let maiorIdade = (idade >= 18) ? "true":"false"
console.log(maiorIdade)

let temCarro = "s"
let rico = (temCarro == "s") ? "você é rico" : "você é pobre!"
console.log(rico)
console.log("----------------------------------------------------")
//valores considderados falsy 
// 0, "" sting vazia , nan(oi *2), undefined,null,false
if(NaN)
console.log("true")
else
console.log("false")
if(0)
console.log("true")
else
console.log("false")
if(NaN )
console.log("true")
else
console.log("false")
if(undefined)
console.log("true")
else
console.log("false")
if(null)
console.log("true")
else
console.log("false")
if(false)
console.log("true")
else
console.log("false")

