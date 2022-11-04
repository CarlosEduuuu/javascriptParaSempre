//array de objetos

const pessoas = [{
    nome: "carlos",
    idade: 20
    
},{ nome: "eduardo",
idade: 30

},{
    nome: "felix",
    idade: 40   

}]

console.log(pessoas)
console.log(pessoas[1].idade)


console.log("------------------------------------------")
for (let x = 0; x <= pessoas.length -1; x++){    
    console.log(pessoas[x])
    console.log("---   ---   ---   ---   ---")
    //para exibir separadamente cada propriedade
    console.log(pessoas[x].nome)
}