//...spred operator
//usado para passar como argumentos para uma função numeros separados , ou seja, quebrar uma array
const arr = [1, 2, 3]

function spread() {
    console.log(arguments)
    console.log(arguments.length)
}
spread(...arr)
spread(...[1, 2, 3])

console.log("-------------------------------")
//ex 2

const arr2 = arr.push(...arr)
console.log(arr)
console.log(arr2)
