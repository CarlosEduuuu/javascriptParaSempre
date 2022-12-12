//destruturing
//pega uma array em coloca seus elementos em variáveis
const arr = [1, 2, 3, 4, 5]

const [n1, n2, , ...n3] = arr
//no caso de passar uma variável (n1), ele vai pegar somente o primeiro elemento da array
//se usar o ...n2, ele vai adicionar os elementos restantes dentro da variável n2 como um array
//se eu quiser ignorar algum valor basta colocar uma vírgula.
console.log(n1, "-", n2 , n3)