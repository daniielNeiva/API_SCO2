//Piscina na casa dos amigos
import { question } from 'readline-sync'

function main() {
  console.log('*****ENCHER PISCINA*****')

  //DIMENSOES
  const largura = Number(question('Insira o valor da largura da piscina em cm: '))
  const comprimento = Number(question('Insira o valor do comprimento da piscina em cm: '))
  const profundidade = Number(question('Insira o valor da profundidade da piscina em cm: '))
  const valor_mil_litros = Number(question('Quanto custa 1000 litros de agua na sua cidade? '))

  const capacidade_maxima = (largura * comprimento * profundidade) / 1000
  const recomendado_encher = capacidade_maxima * 0.85

  const valor_encher = ((Math.ceil(recomendado_encher / 1000))  * valor_mil_litros)

  const qtd_repor_mensal = recomendado_encher * 0.10;
  const valor_repor_mensal = Math.ceil(valor_encher) * 0.10

  console.log('*****RESULTADO PARA AS DIMENSOES INFORMADAS*****')
  console.log(`A capacidade maxima de agua é de ${capacidade_maxima} litros`)
  console.log(`O recomendado e encher com ${recomendado_encher} litros`)
  console.log(`O custo para encher a piscina ate o recomendado e de ${valor_encher}R$`)
  console.log(`A quantidade de litros que se deve repor mensalmente é de ${qtd_repor_mensal} litros, que tem custo de ${valor_repor_mensal}R$.`);
}

main()

