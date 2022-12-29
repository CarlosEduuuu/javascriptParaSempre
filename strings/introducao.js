//replace()
//TROCA a promeira letra i pela letra o 
let str1 = "minha string"
console.log(str1.replaceAll("i", "o"))
console.log(str1)

//trocar todos usando expressão regular obs: tem que ser letra g
let str2 = "trocar todos os is i i i i i "
console.log(str2.replace(/i/g , "0"))
console.log(str2)

//indexOf
//mostra a primeira posição da palavra procurada
console.log(str2.indexOf("os"))

//lastIndexOf
//mostra a última posição da  da palavra procurada
console.log(str2.lastIndexOf("os"))

//obs: se por acaso não existir a palavra ele retornará -1
//ex:
console.log(str2.lastIndexOf("carlos"))

//includes
//identico ao index ou lastIndex porém retor um booleano true ou falso
console.log(str2.includes("carlos"))

//slice
//corta uma string na posição desejada
console.log(str1.slice(2,5))

//substring
//também corta uma string
console.log(str1.substring(2))//da posição 2 até o final
console.log(str1.substring(2, 5))

//toLowerCase e toUpperCase
//deixa toda minúscula ou maiúscula
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())


console.log("----------------------------")


//trim
//remove os espaços vazios
let str3 = "    "+ "carlos" + "        "
console.log(str3)
console.log(str3.trim())//todos espaços
console.log(str3.trimEnd())//espaços no final
console.log(str3.trimStart())//espaços no inicio

//padStart e padEnd
//preenche a string para ficar com o lenght desejado
let str4 = "0123456789"
console.log(str4.padEnd(20))
console.log(str4.padStart(20))
console.log(str4.padEnd(20, "#"))//preencher com outros caracteres
console.log(str4.padStart(20, "_"))

//startsWith , endsWith
//verifica se uma string inicia ou termina com uma determinada palavra
let str5 = "Hoje é domingo ou não domingo"
console.log(str5.startsWith("Hoje"))
console.log(str5.endsWith("domingo"))

//chartAt
//serve para recuperar a letra armazenada na posição que eu passar

let str6 = "abcdefghi"
console.log(str6.charAt("4"))
console.log(str6.charCodeAt("4"))//mostra o unicode dessa letra