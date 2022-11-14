let arr =  [1,2,3]
let arr2 = [4,5,6]

//toString mostra a array como string
console.log(arr.toString())

//join
//identico ao toString porém coloca outros caracteres no lugar da vírgula por exemplo
console.log(arr.join("/"))

//concat
//serve para juntar arrays
let arr3 = arr.concat(arr2)
console.log(arr3)
//Também posso adicionar outros elementos
let array4 = arr3.concat(arr,34,56,78)
console.log(array4)