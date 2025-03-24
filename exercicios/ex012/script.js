function go(){
    var numero = Number(prompt('Digite um numero'))
    var res = document.getElementById('resposta')
    var teste = numero%2
    if(teste===0){
        res.innerHTML = `O numero ${numero} é <mark>par</mark>`
    }else{
        res.innerHTML = `O numero ${numero} é <mark>impar</mark>`
    }
}