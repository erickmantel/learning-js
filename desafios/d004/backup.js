function troco(){   
    var produto = prompt('Qual produto você está comprando?')
    var valor = Number(prompt(`Quanto custa esse ${produto} que você está comprando?`)) 
    var dinheiro = Number(prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}?`))
    var troco = dinheiro - valor




    alert(`Você comprou ${produto} que custou ${valor}\nDeu R$ ${dinheiro} e vai receber R$ ${troco} de troco.\nVolte Sempre!`)

}