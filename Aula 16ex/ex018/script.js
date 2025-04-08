//Acesso as variaveis de controle do código
let output = document.querySelector('div#output')
let num = document.querySelector('input#num')
let select = document.querySelector('select#saida')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){//numero entre 1 e 100 true
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){//true se valor não estiver na lista
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//se estiver dentro de 1 e 100 e se não estiver na lista = true
        valores.push(Number(num.value))//Adicionar depois do ultimo indice do array
        let item = document.createElement('option')//cria a option
        item.text = `Valor ${num.value} adicionado`//adiciona texto ao option
        select.appendChild(item)
        output.innerHTML = ''
    }else{
        window.alert('[ERROR] Valor invalido ou já digitado na lista')
    }

    num.value = ''
    num.focus() 
}


function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){//estrutura for não entendi bem estudar depois
            soma += valores[pos]
            if(valores[pos]>maior)
                maior = valores[pos]
            if(valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma / tot
        output.innerHTML = ''
        output.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        output.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        output.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        output.innerHTML += `<p>A média dos valores digitados é ${media}`
    }
}









/*

Anotações a respeito da lógica do código...
1° Acesso as variaveis de controle
2° Estruturas de verificação
Se numero for menor que 1 e maior que 100 então digite um valor certo
3° Função adicionar ao clicar no botão adicionar vai adicionar uma option no select com o valor 

*/