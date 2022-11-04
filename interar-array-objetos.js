//Iteração de array
const array = ["carlos", 20, 30, 40, true]

for (let x = 0; x <= array.length; x++) {
    console.log(x)//mostrar indice
    console.log(array[x])//mostra elementos

}
console.log("=============================")
//iteração de objetos
const pessoas = { nome: "carlos", idade: 30, sexo: "indefinido" }
for (const x in pessoas) {
    console.log(x)//mostrar as propriedades
    console.log(pessoas[x])//mostrar elementos
}


