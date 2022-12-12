
function teste2(){

    const teste2 = {
        nome:"carlos"
    }
console.log(this)
}

function teste(){
    console.log(this)
    console.log(teste2)
}
teste2()