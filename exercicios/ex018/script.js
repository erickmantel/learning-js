var resultado = document.getElementById('res')

var randomNumber = Math.floor(Math.random() * (10-1 +1)) +1 //gerador de numeros randomicos

console.log(randomNumber)

function adivinhar(){
    var num = prompt('Qual é o seu palpite?')
    var convertNum = Number(num)
    
    
    
    if (convertNum<randomNumber){
        resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MAIOR</b>!</p>`
    }else if (convertNum>randomNumber){
        resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MENOR</b>!</p>`
    }else{
        resultado.innerHTML += `<p><b>PARABÉNS!</b> Você acertou! Eu tinha sorteado o valor ${randomNumber}!</p>`
    }

}

//PARABÉNS! Você acertou! Eu tinha sorteado o valor 46!

// o meu gerador só gera de 1 a 10 seria de 1 a 100, e toda vez que entra com o input ele gera dnv um novo random number


// se apertar cancel no prompt retorna null fazer verificação para encerrar function com return.