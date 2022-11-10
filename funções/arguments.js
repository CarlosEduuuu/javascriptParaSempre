

console.log("--------Solução 1------------")
//fazer uma função para somar 3 numeros 
//imagina se eu quizesse passar mais parâmetros...
function somar(n1, n2, n3) {
    return (n1 + n2 + n3)
}
console.log(somar(1, 2, 3))

console.log("--------Solução 2------------")
//solução 2
//poderia passar uma array
function somaArray(arr) {
    let total = 0
    for (let x = 0; x < arr.length; x++) {
        total += arr[x]
    }
    return total
}
console.log(somaArray([1, 2, 3]))//passo um array 

console.log("--------Solução 3------------")
//solução 3
//arguments.length
//solução identica a solução  2 porém, não é necessário colocar parâmetro na função, 
//basta adicionar o arguments. length no lugar do arr.legth no for.
//serve como se fosse um array
//funciona em uma function express mas não funciona em arrow functions
function somar3() {//não é nencessário receber nenhum parâmetro
    console.log(arguments)//não posso concatenar com string para exibir
    let total = 0
    for (let x = 0; x < arguments.length; x++) {
        total += arguments[x]
    }
    return total
}
console.log(somar3(1, 2, 3))
console.log(somar3(1, 2, 3, 4, 5, 6, 7, 8, 9))

console.log("--------Solução 4------------")
//testando exprees function com arguments
const somar4 = function nomeada(){
    let total = 0
    for(let x = 0; x < arguments.length; x++){
        total += arguments[x]
    }
    return total
}
console.log(somar4.name)//se eu quiser saber o nome da função
console.log(somar4(1,2,3))


console.log("--------Solução 5------------")
//já com arrow function não iria funcionar 
const somar5 = () =>  {
    let total = 0
for(let x = 0; x < arguments.length; x++){
    total += arguments.length[x]
}
return total
}
console.log(somar5(1,2,3))
