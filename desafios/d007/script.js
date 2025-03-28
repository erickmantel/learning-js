function converter(){
    //acesso as variaveis e conversão delas
    var output = document.getElementsByTagName('p')[0]
    var cotDolar = Number(prompt('Antes de mais nada.Quanto está a cotação do dólar agora?').replace(',', '.'))
    var reais = Number(prompt('Quantos R$ você tem na carteira?').replace(',', '.'))

    //calculo
    var dolar = reais/cotDolar

    //saida 
    output.innerHTML = ''
    output.innerHTML +=`${reais} R$ dão ${dolar.toFixed(2)} US$ de acordo com essa cotação de ${cotDolar}`

}

//5,69 cotação hj