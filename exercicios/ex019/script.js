var saida = document.getElementById('saida')

function input(){    
    var n1 = Number(prompt('Primeiro valor: '))
    var n2 = Number(prompt('Segundo valor: '))
    var escolha = Number(prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir\n`))
    
    var resultado

    switch (escolha) {
        case 1:
            resultado = n1+n2
        break;
        case 2:
            resultado = n1-n2
        break;
        case 3:
            resultado = n1*n2
        break;
        case 4:
            resultado = n1/n2
        break;
    }
    saida.innerHTML = `<p><h1>Calculando...</h1></p> <p>${n1} + ${n2} = ${resultado}</p>`
    /*COlocar validação para só entrar com decimal usando . porque o sistema não aceita virgula*/
}

/*Ver algumas veriicações*/