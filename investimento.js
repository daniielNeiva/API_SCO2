import { question } from 'readline-sync'

function main() {
  console.log('*****BEM VINDO A CALCULADORA DE INVESTIMENTOS*****')

  const objetivo = question('Qual seu objetivo com esse investimento? ')
  const capital_objetivo = Number(question('Qual valor necessário para realizar esse objetivo? '))
  const salario = Number(question('Qual o valor do seu salário mensal? '))
  const percentual_sal_invest = Number(question('Qual percentual do seu salário você deseja investir por mês? '))
  const taxa_juros = Number(question('Qual será a taxa de juros do investimento escolhido (em %)? '))
  

  const calculo_pedaço = salario * (percentual_sal_invest / 100)

  let saldo = 0
  let meses = 0

  while (saldo < capital_objetivo) {
    saldo += calculo_pedaço
    saldo *= 1 + taxa_juros / 100
    meses++
  }
  const anos = Math.floor(meses / 12)
  const mesesRestantes = meses % 12
  const tempoParaObjetivo = anos > 0 ? `${anos} ano(s) e ${mesesRestantes} mes(es)` : `${mesesRestantes} mes(es)`
  console.log('*****RESULTADO DO INVESTIMENTO*****')
  console.log(`Você alcançará seu objetivo de ${objetivo} em ${tempoParaObjetivo}.`)
}

main()