/* construir uma função para calcular imc
1- Deve retornar um único número
2- Deve gerar um erro se receber um parâmetro não número
3- Deve retornar erro caso não receba um dos parâmetros*/

(function () {


    function calcImc(peso, altura) {
        if (  peso === undefined || altura === undefined){
            throw Error ("Faltando parâmetros!")
        }
        if (typeof peso !== "number" || typeof altura !== "number"){
            throw Error("somente numeros!")
        }

        return peso / (altura * altura)

    }

    function gerarMetrica(calculo){
        if (calculo <= 16.9){
            return "Muito abaixo do peso "
        }else if (calculo < 18.4){
           return" Abaixo do peso "
        }
        else if( calculo < 24.9){
            return "Peso normal "
        }else if (calculo < 29.9){
            return "Acima do peso"
        }else if (calculo < 34.9){
            return "Obesidade Grau I"
        }else if (calculo < 40){
            return "Obesidade Grau II"
        }else return "Obesidade Grau III"
    }

   let calculo = calcImc( "2",1.90)
   let metricaImc = gerarMetrica(calculo)

   console.log(metricaImc)
})()