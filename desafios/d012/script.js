function mudar(){
    var output = document.getElementsByTagName('p')[0]
    var precoAnterior = Number(prompt('Qual era o preço anterior do produtor?').replace(',','.'))
    if(isNaN(precoAnterior)){
        alert('Digite um valor válido!')
        return
    }
    var precoAtual = Number(prompt('Qual é o preço atual do produto?').replace(',','.'))
    if(isNaN(precoAtual)){
        alert('Digite um valor válido!')
        return
    }


    output.innerHTML = ''
    if(precoAnterior>precoAtual){
        output.innerHTML += `<p>O produto custava R$ ${precoAnterior} e agora custa R$ ${precoAtual}.</p>`
        output.innerHTML += `<p>Hoje o preço está mais barato.</p>`
        output.innerHTML += `O preço caiu R$ ${precoAnterior-precoAtual} em relação ao preço anterior.`
        
        // Calculando a porcentagem de redução
        var percentualReduzido = ((precoAnterior - precoAtual) / precoAnterior) * 100;
        output.innerHTML += `<p>A variação de ${percentualReduzido.toFixed(2)}% para baixo.<p>`
    }else{
        output.innerHTML += `<p>O produto custava R$ ${precoAnterior} e agora custa R$ ${precoAtual}.</p>`
        output.innerHTML += `<p>Hoje o preço está mais caro.</p>`
        output.innerHTML += `<p>O preço subiu R$ ${precoAtual-precoAnterior} em relação ao preço atual.</p>`
       
        // Calculando a porcentagem de redução
        var percentualAumentado = ((precoAtual-precoAnterior) / precoAtual) * 100;
        output.innerHTML += `<p>A variação de ${percentualAumentado.toFixed(2)}% para cima.</p>`
    }

}