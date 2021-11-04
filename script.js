let nome= prompt("Digite o seu nome:")
let ano= prompt("Digite o ano em que nasceu:")

ano= parseInt(ano)
let idade= 2021 - ano;

let mensagem= `Olá, o seu nome é  ${nome}, e você tem  ${idade} anos `
alert(mensagem)