//math não é um construtor, serve para nos ajudar com operações matemáticas
//math.min, math.max retorna o maior e menor valor
console.log(Math.min(1,2,3,4,5,6,7,8,9))
console.log(Math.max(1,2,3,4,5,6,7,8,9))
//posso usar um expred operate para verificar dentor de um vetor
let arr = [1,2,3,4,5]
console.log(Math.max(...arr))

//math.round, Math.floor
//serve para arredondar
console.log(Math.round(45.50000))//arredonda para cima
console.log(Math.floor(45.50000))//arredonda para baixo
console.log(Math.ceil(45.50000))//arredonda sempre arredonda para cima

//pow, potência
console.log(Math.pow(2,3))// 2 elevado a 3
console.log(Math.sqrt(49))//raiz quadrada de 49
console.log(Math.cbrt(8))//raiz cubica
console.log( Math.random()*10)//retorna numeros aleátorios de acordo com o *N que eu pedir 
