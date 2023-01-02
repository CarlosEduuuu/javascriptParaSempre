//data instânciada do objeto
//métodos gets servem para receber valores
const data = new Date()
console.log(data)//completa
console.log(data.getDate())//dia do mês
console.log(data.getDay())//dia da semana
console.log(data.getMonth())//mês
console.log(data.getHours())//hora
console.log(data.getMinutes())//minutos
console.log(data.getSeconds())//segundos
console.log(data.getFullYear())//ano

console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleDateString)
console.log(data.toLocaleString())
console.log(data.toUTCString())