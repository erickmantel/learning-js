function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(document.getElementById('txtano').value) 
    console.log(typeof fano)
    var res = document.querySelector('div#res')
    var idade = ano - fano    

    res.style.textAlign = 'center'

    if (fano == 0 || fano > ano){//se o ano for igual a zero ou maior que o ano atual então ERRO ANO INVA
        res.style.color = 'crimson'
        res.innerHTML = '[ERRO] Ano inválido'
    }else{
        var fsex = document.getElementsByName('radsex')//entrada do sexo como vetor no js
        res.style.color = 'black' //edição do style da div do form
        var gênero = ''        

        var img = document.createElement('img')  //criou o elemento <img> no html via js
        img.setAttribute('id', 'foto') //definiu o atributo id no elemento foto e deu o valor foto pra ele

        if (fsex[0].checked){ //se a var fsex estiver true no 0 do vetor então execute...
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10){//maior ou igual a 0 e menor ou igual a 10 = criança
                img.setAttribute('src','foto-criança-m.png')
            }else if (idade < 30){//acima de 10 e abaixo de 30 = jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade < 65){//acima de 30 e abaixo de 50 = adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','foto-criança-f.png')
            }else if (idade < 30){
                img.setAttribute('src','foto-jovem-f.png')
            }else if (idade < 65){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }   
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
    res.appendChild(img)
}