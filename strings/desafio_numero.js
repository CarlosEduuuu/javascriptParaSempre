function mascararNumero(numero){
   
    let numeroModificado = numero.substring(2 , (numero.length - 2))
    numeroModificado = numeroModificado.padEnd( (numero.length - 2) , "#")
    numeroModificado = numeroModificado.padStart( (numero.length) , "#")
    console.log(numeroModificado)
}

let tel = "2"
mascararNumero(tel)