

const txtEmail = document.getElementById("txtEmail")
const newsletterFeedback = document.getElementById("newsletterFeedback")





function exibirEmail(){
let email = txtEmail.value
newsletterFeedback.innerHTML = `O email cadastrado foi: ${email} `
}