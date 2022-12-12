const obj = {nome: "carlos", idade: "40" , sexo: "masculino"}
//usado para exibir as propriedades dos objetos
for (let prop in obj){
    console.log(prop)
}
console.log(obj)

const arr = [1,2,3]

for (let prop in arr){
    console.log(prop , " : " , arr[prop])
}

//for of retorna o valor dos elementos

const arrOf = [10,20,30]

for(let prop of arrOf){
    console.log(prop)
}