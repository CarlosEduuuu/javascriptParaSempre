//callback, posso passar uma função para outra função
//primeiro executar o que esta na função chamada e depois o que esta na função passada como parâmetro
//chama de volta

function fn(cb/*callback*/) {//recebe função como parâmetro
    console.log("executar ação de callback -- 1")
    console.log("tipo do parâmetro: -- 2 " + typeof cb)//mostra o tipo do parâmetro (função)

    //(opcional) faço um curto circuito ou um if para a chacagem se o parâmetro é uma função pois, 
    //se não for não será possível ser executadacb()//executa a função passada
    typeof cb === "function" && cb()

}
fn(function () {//passando uma função como parâmetro para outra função
    console.log("função passada por parâmetro -- 3")
})

