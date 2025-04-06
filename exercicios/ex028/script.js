function fatorial(){
    var saida = document.getElementById('saida')
    var numero = Number(document.getElementById('n1').value)

    saida.innerHTML += `<h2>Calculando ${numero}!</h2>`
    var cont = numero
    var fat = 1
    while(cont > 1){
        saida.innerHTML += `${cont} x`
        fat = fat * cont//fat ganha o valor do numero atualmente, e do contador
        cont --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`

   
}
/*Calcular o fatorial de um número significa multiplicá-lo por todos os números inteiros positivos menores que ele até 1.*/