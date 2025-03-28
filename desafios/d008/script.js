function calcular(){
    var output = document.getElementsByTagName('p')[0]
    var produto = prompt('Qual é o produto que você está comprando?')
    var preço = Number(prompt(`Qual é o valor de ${produto}?`).replace(',','.')).toFixed(2)
    var porcemDesc = (preço/100)*10 //calculo porcentagem
    var preçoDesc = preço - porcemDesc //calculo preço - porcemtagem = desconto
     
    //saida
    output.innerHTML = ''
    output.innerHTML += `<h1><b>Calculando desconto de 10% para ${produto}<b/></h1>`
    output.innerHTML += `<p>O preço original era R$${preço}.</p>`
    output.innerHTML += `<p>Você acaba de ganhar R$ ${porcemDesc.toFixed(2)} de desconto (-10%).</p>`
    output.innerHTML += `<p>No fim, você vai pagar R$${preçoDesc.toFixed(2)} no produto (a) ${produto}.</p>`
  
    //fazer vericações de segurança antes de começar caso coloque @ ou numero no lugar de letra e letra no lugar de numero
}