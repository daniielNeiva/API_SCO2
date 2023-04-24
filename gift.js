//gift
import {question} from 'readline-sync'
function main(){
    console.log('*****CASHBACK PROGRESSIVO*****')
    let compras = Number(question('Insira o numero de compras a serem registradas:  '))
    let contador = 1
    let valor_compras = 0
    let cashback_total = 0
    let maior_cashback = 0
    let menor_cashback = Infinity
    
     
    while(contador <= compras){
        let Nome = question('Insira o nome do cliente:  ')
        let valor_compra = Number(question('Insira o valor da outra compra:  '))
        
        let cashback = 0
         cashback = verificar_cashback(valor_compra,cashback)

        valor_compras += valor_compra
        cashback_total += cashback

        if(cashback < menor_cashback)
        menor_cashback = cashback
        if(cashback > maior_cashback)
        maior_cashback = cashback

        contador++
    }  

    console.log('*****RESULTADO FINAL*****')
    console.log(`O faturamento total foi de: ${valor_compras}R$`)
    console.log(`O total de cashback investido foi de: ${cashback_total.toFixed(2)}R$`)
    console.log(`O percentual de cashback investido foi de: ${(cashback_total / 100).toFixed(2)}%`)
    console.log(`O menor cashback foi de: ${menor_cashback.toFixed(2)}R$`)
    console.log(`O maior cashback foi de : ${maior_cashback.toFixed(2)}R$`)
    console.log(`O valor medio de cashback distribuido foi de ${cashback_total / compras.toFixed(2)}`)
}

function verificar_cashback(valor_compra, cashback){
    if(valor_compra <= 250){
     cashback = valor_compra * 0.05 
    }else if(valor_compra > 250 && valor_compra <= 500){
     cashback = valor_compra * 0.07
    }else if(valor_compra > 500 && valor_compra <= 750 ){
     cashback = valor_compra * 0.08
    }else{
     cashback = (250 * 0.05) + (500 * 0.07) + (750 * 0.08) + ((valor_compra - 750) * 0.25)
    }
    return cashback
}
main()
