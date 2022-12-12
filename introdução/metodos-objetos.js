/*metodos de objetos nada mais é do que uma função
 atrelada ao objetos com o intuito de fazer atualizações*/


const produto = {
    nome: "caneta", qtd: 10, //propriedades

    //método comprar
    comprar: function (n) {
        /*se quiser tirar a palavra function não teria problema */
        console.log("produtos disponiveis: ")
        console.log(this/*nesse caso faz referêcia ao produdo(objeto)*/)

        if (n > this.qtd) {
            return "quantidade não disponivel!"//nesse caso ele não mostra o texto mas tb não subtrai nada 
        }
        /*nesse caso não é preciso usar o else pois, se o n for maior ele retorna
        e sai da função*/
        this.qtd -= n
    }, teste1: function (n) {/* posso colocar quantas funções forem necessárias porém,
        é sempre depois da vírgula de cada parânetro*/
        console.log(this)
        console.log(this.nome)

    }, teste2: (n) => {/* No caso de usar uma arrow function ela não faz referência ao objeto produto e sim no objeto window*/
        console.log(this)
        console.log(this.nome)
    }

}

produto.comprar(3)//chama a função 
console.log(produto)

produto.comprar(13)//chama a função 
console.log(produto)

produto.teste1()
console.log("-----------------------------------")
produto.teste2()


