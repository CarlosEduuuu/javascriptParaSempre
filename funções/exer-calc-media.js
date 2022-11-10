/*execício calcular média
Pode receber um ou mais valores numéricos 
Deve retornar um único valor
Deve gerar um erro se receber um parâmetro não numero(
Deve retornar zero caso não recebe nenhum parâmetro*/

(function(){
    function calcMedia() {
       // console.log(arguments.length)
        if (arguments.length === 0){
            return 0
        }
        let total = 0
        for (let x = 0; x < arguments.length; x++) {
            if (typeof arguments[x] !== "number") {
                throw Error("Somente numeros!")
            }  
            total += arguments[x]
            
        }
        return total / arguments.length
        
    }
   let media = calcMedia()
   console.log(media)
})()


