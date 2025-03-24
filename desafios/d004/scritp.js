function troco(){   
    var produto = prompt('Qual produto você está comprando?')

    //Verifica se o usuario cancelou ou deixou o campo vazio
    if (!produto){
        alert('Operação cancelada.Nome do produto não pode estar vazio.')
        return
    }

    var valor = Number(prompt(`Quanto custa esse ${produto} que você está comprando?`)) 

    //Verifica se o valor é um número válido ou é menor ou igual a zero
    if (isNaN(valor) || valor <= 0){
        alert('Valor do produto inválido. Digite um número válido.')
        return
    }

    var dinheiro = Number(prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}?`))

    //Verifica se o dinheiro inserido é um número valido
    if(isNaN(dinheiro) || dinheiro <= 0){
        alert('Valor do produto invalido. Digite um numero válido.')
        return
    }

    if(dinheiro < valor){
        alert(`Você não têm dinheiro para comprar ${produto}.`)
        return
    }

    var troco = dinheiro - valor

    alert(`Você comprou ${produto} que custou ${valor}\nDeu R$ ${dinheiro} e vai receber R$ ${troco} de troco.\nVolte Sempre!`)
}