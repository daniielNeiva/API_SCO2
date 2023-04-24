import { question } from "readline-sync"

function main() {
  console.log('*****CONTA DE ENERGIA*****')
  const atual_leitura = Number(question("Insira a sua leitura atual: "))
  const anterior_leitura = Number(question("Insira sua leitura anterior: "))
  
  const consumo = atual_leitura - anterior_leitura
  const valorFaturado = verificar_tarifa(consumo)
  //bandeira
  const Bandeira = Math.floor(consumo / 100) * 8
  
  //icms
  const icms = valorFaturado * 0.25
  const pisConfis = valorFaturado * 0.15
  
  const taxaIluminacao = verificar_taxa_iluminaçao( consumo,valorFaturado)

  // Adiciona os impostos e a taxa de bandeira ao valor total
  const valor_total_faturado = valorFaturado + icms + pisConfis + Bandeira + taxaIluminacao
  //Saida
  console.log('*****BOLETO CONTA DE LUZ*****')
  console.log(`O seu consumo foi de ${consumo}kwh`)
  console.log( `O valor faturado foi de ${valorFaturado.toFixed(2)}R$`)
  console.log(`A taxa de iluminação foi de ${taxaIluminacao.toFixed(2)}R$`)
  console.log(`Bandeira R$ ${Bandeira.toFixed(2)}R$`)
  console.log(`PIS/CONFIS R$ ${pisConfis.toFixed(2)}R$`)
  console.log(`ICMS R$ ${icms.toFixed(2)}R$`)
  console.log(`Total a Pagar R$ ${valor_total_faturado.toFixed(2)}R$`)
}
function verificar_tarifa(consumo){
  if(consumo > 0 && consumo <= 30) {
    return 0 
  }else if (consumo > 30 && consumo <= 100) {
    return consumo * 0.59
  }else if (consumo > 100) {
    return consumo * 0.75
  }
}
function verificar_taxa_iluminaçao(consumo,valorFaturado){
  if (consumo > 80) {
    return valorFaturado * 0.06
  }else{
    return 0
  }
}
main()
