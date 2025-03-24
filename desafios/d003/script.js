function antesDepois() {
    var valor = Number(prompt("Digite qualquer numero inteiro"))

    if (isNaN(valor)){
        alert('Digite um numero inteiro!\nNão será aceito @#$ ou letras.')
        return
    }
    
       
    
    var ant = valor - 1
    var suc = valor + 1
    alert(`Antes de ${valor}, temos o número ${ant}.\nDepois de ${valor}, temos o número ${suc}.`)
    
}

