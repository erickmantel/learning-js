var resultado = document.getElementById('res')
var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1

function adivinhar() {
    var num = prompt('Qual é o seu palpite?')
    var convertNum = Number(num)

    if (isNaN(convertNum)) {
        alert('Por favor o valor correto.')
        return
    }

    if (convertNum < randomNumber) {
        resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MAIOR</b>!</p>`
    } else if (convertNum > randomNumber) {
        resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MENOR</b>!</p>`
    } else {
        resultado.innerHTML += `<p><b>PARABÉNS!</b> Você acertou! Eu tinha sorteado o valor ${randomNumber}!</p>`
        acertou = true
    }

}



/*Fazer com que ao clicar no okay do alert "Por favor o valor correto." volte pro alert "Qual é seu palpite?" e se cancelar nesse fazer a função acabar com o return*/