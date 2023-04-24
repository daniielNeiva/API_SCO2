import { question } from "readline-sync";

function main(){
//A
let a = Number(question("Digite o valor do critério a (0-100): "))
while (a < 0 || a > 100) {
    console.log("Ops, só são aceitos numeros de 0-100, digite novamente")
    a = Number(question("Digite o valor do critério a (0-100): "))
}
//B
let b = Number(question("Digite o valor do critério b (0-100): "))
while (b < 0 || b > 100) {
    console.log("Ops, só são aceitos numeros de 0-100, digite novamente")
    b = Number(question("Digite o valor do critério b (0-100): "))
}
//C
let c = Number(question("Digite o valor do critério c (0-100): "))
while (c < 0 || c > 100) {
    console.log("Ops, só são aceitos numeros de 0-100, digite novamente")
    c = Number(question("Digite o valor do critério c (0-100): "))
}

//PROCESSAMENTO
const score1 = Math.floor(a*0.26 + b*0.57 + c*0.17)
const score2 = Math.floor(a*0.62 + b*0.19 + c*0.19)
const categoria1 = verificar_categoria1(score1)
const categoria2 = verificar_categoria2(score2)

//SAÍDA
console.log(`Score 1.0: ${score1} - ${categoria1}`)
console.log(`Score 2.0: ${score2} - ${categoria2}`)
}

function verificar_categoria1(score) {
if (score >= 800 && score <= 1000) {
return "Muito bom"
} else if (score >= 600 && score <= 800) {
return "Bom"
} else if (score >= 400 && score <= 600) {
return "Regular"
} else {
return "Baixo"
}
}

function verificar_categoria2(score) {
if (score >= 701 && score <= 1000) {
return "Muito bom"
} else if (score >= 501 && score <= 700) {
return "Bom"
} else if (score >= 301 && score <= 500) {
return "Regular"
} else {
return "Baixo"
}
}

main()