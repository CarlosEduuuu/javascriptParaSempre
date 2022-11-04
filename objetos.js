const pessoas = new Object()
pessoas.nome = "eduardo"
pessoas.Idade = 40
pessoas.sexo = "????hahhaa"
console.log(pessoas)
console.log(pessoas.sexo)
console.log("--------------------------------------------------------------")

//forma literal
const pessoas2 = {nome: "carlos", Idade: 40, sexo:"masculino"}

//quando você não sabe o nome da propriedade
let prop = "nome"
let prop2 = "Idade"
console.log(pessoas2[prop])
console.log(pessoas2[prop2])
console.log(pessoas2["Idade"])//mesma coisaque interior
console.log(pessoas2)



