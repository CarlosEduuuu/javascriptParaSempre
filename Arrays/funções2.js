//indexOf retorna o primeiro indice do numero procurado ou -1 se não existir
//lastIndexOf retorna o último indice do numero procurado 
let arr = [1,2,3,49,1,22,3,4]

console.log(arr.indexOf(3))
console.log(arr.lastIndexOf(3))
console.log(arr.indexOf(13))


console.log("-------------------------------------")
//includes é bem parecido com o index ou lastIndex no caso de não encontra o elemento porém ao invés de retornar o elemento ele retorna true ou false

console.log(arr.includes(3))
console.log(arr.includes(13))

console.log("-------------------------------------")

//Find
//retorna o primeiro elemento procurado
console.log(arr.find(function(elemento){
//return elemento > 10000 se não encontrar ele retorna undefined
return elemento > 10000
}))

//FindIndex
//retorna o indice do primeiro elemento procurado
console.log(arr.findIndex(function(elemento){
return elemento > 10
}))
console.log("-------------------------------------")