function verificar() {
    var output = document.getElementsByTagName('p')[0]
    var ano = Number(prompt('Qual é o ano que você quer verificar se é bissexto?'))

    if (isNaN(ano)) {//verifica se o valor inserido no prompt é válido
        output.innerHTML = `[ERRO] Digite um valor valido!`
        return
    }

    function diasNoAno(ano) {//função que vai retornar quantos dias têm o ano
        return new Date(ano, 2, 0).getDate() === 29 ? 366 : 365;
    }

    var bissexto = 366

    if (diasNoAno(ano) == bissexto) {
        // é bissexto
        output.innerHTML = ''
        output.innerHTML += `<p><h1>Analisando o ano de ${ano}...</h1></p>`
        output.innerHTML += `<p>O ano de ${ano} É BISSEXTO ✅</p>`
    } else {
        //não é bissexto
        output.innerHTML = ''
        output.innerHTML += `<p><h1>Analisando o ano de ${ano}...</h1></p>`
        output.innerHTML += `<p>O ano de ${ano} NÃO É BISSEXTO ❌</p>`
    }


}

