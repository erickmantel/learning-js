function reajuste(){
    var output = document.getElementsByTagName('p')[0]
    var func = prompt('Qual é o nome do funcionário?')
    var sal = Number(prompt(`Qual é o sálario de ${func}?`).replace(',','.')) 
    var porc = Number(prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`).replace(',','.'))
    console.log(typeof sal)
    console.log(typeof porc)

    //calculo
    var valorDaporcentagem = (sal/100)*porc
    var novosal = sal+valorDaporcentagem

    output.innerHTML = ''
    output.innerHTML += `<p>O salário atual era R$${sal}.</p>`
    output.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar R$${valorDaporcentagem.toFixed(2)} no próximo mês.</p>`
    output.innerHTML += `<p>E a partir dai, ${func} vai passar a ganhar R$${novosal.toFixed(2)}.</p>`
   


    //retornou...
    //O salário atual era R$NaN.
    //Com um aumento de 20%, o salário vai aumentar R$NaN no próximo mês.
    //E a partir dai, Erick vai passar a ganhar R$NaN
}