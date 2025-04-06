//Acesso a todos os controles 

var select = document.getElementById('select')
var output = document.getElementById('output')
var numeros = []

function adicionar() {
    var num = Number(document.getElementById('num').value)
    if (num < 1 || num > 100 || numeros.indexOf(num) !== -1) {//Verificações 
        alert('[ERRO] Valor invalido ou já encontrado na lista!')
        return
    }
    numeros.push(num)//Adiciono valor ao array
    var item = document.createElement('option')//Crio o <option>
    item.text = `Valor ${num} adicionado.`//Defino o texto dentro do option
    select.appendChild(item)//Adicono ao <select> a tag filho option criada


    //Não funcinou como no video
    num.value = ''
    num.focus()
}

function soma() {
    return numeros.reduce((acc, val) => acc + val, 0)
}

function media() {
    return numeros.length ? soma() / numeros.length : 0
}

function maiorValor(){
    return Math.max(...numeros)//O math é um objeto, com o metodo max que retorna o mair valor individual e não como array, pra isso serve o operador ... que individualiza os valores do array numeros[]
}

function menorValor(){
    return Math.min(...numeros)//mesma lógica
}

function finalizar() {
    //Retornar o total de valores cadastrados .length, o maior valor informado, o menor valor informado, somatoria de todos os valores, a média dos valores digitados
    
    //Acesso aos dados de saida dentro da função finalizar
    var total = numeros.length
    var maior = maiorValor()
    var menor = menorValor()
    var somatorio = soma()
    var mediaFinal = media()

    if (total == 0 || maior == 0 || menor == 0 || somatorio == 0 || mediaFinal == 0){
        alert('[ERRO] Adicione um ou mais numeros antes de finalizar!')
        return
    }

    
    //Saida de dados
    output.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    output.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    output.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    output.innerHTML += `<p>Somando todos os valores, temos ${somatorio}</p>`
    output.innerHTML += `<p>A média dos valores digitados é ${mediaFinal.toFixed(2)}</p>`

    

}



