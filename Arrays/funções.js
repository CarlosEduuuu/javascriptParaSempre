//every
//A idéia desse método é retornar false ou true se todos os elementos forem do tipo especificado
//criar um array
const arr = [1, 20, 3, true, "4"]
let every = arr.every(function (elemento) {
    return typeof elemento === "number"
})
console.log(arr)
console.log("Every: " + every)

console.log("--------------------------------------------------------------")

//Some
//Esse método retornará true ou false se pelo menos um elemento for do tipo específicado
let some = arr.some(function (elemento){
    return typeof elemento === "number"
})
console.log("Some: " + some)

console.log("--------------------------------------------------------------")

//filter
//retorna uma nova array sem alterar a array original
 const arrFilter = arr.filter(function(elemento, indice, arr){
    return typeof elemento === "number" && elemento < 10
 
 })
 console.log("Filter: " + arrFilter )


 console.log("--------------------------------------------------------------")

 //exemplo filter 2
 //exibindo todos os elementos e indices e o array
 const filter = arr.filter(function(elemento, indice, array){
    console.log("elemento; " + elemento)
    console.log("indice: " + indice)
    return true //nesse caso é necessário declarar todos como true pois, só assim todos serão exibidos
 })
 
 //forEach
 //Idem ao método filter 2 porém, usado para substituir o for quando 

 arr.forEach(function (elemento,indice,array){
    console.log("elemento: " + elemento)
    console.log("indice: " + indice)
    console.log("Array: " + arr)
 })
 
 
 console.log("--------------------------------------------------------------")

 //Map
 //Transforma uma nova arrray

 let arr2 = [2,4,6]
 let map = arr2.map(function(elemento,indice,arr){
    return elemento * indice
 })
 console.log("Array: " + arr2 )
  console.log("map: " + map)