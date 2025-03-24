function start(){
    var numero1 = Number(prompt('Digite um numero: '))
    var numero2 = Number(prompt('Digite outro numero: '))
    var res = document.getElementById('res')
    if (numero1>numero2){
        //numero 1 é o maior
        res.innerHTML = `O numero ${numero1} é o maior`
    }else{
        //numero 2 é o maio
        res.innerHTML = `O numero ${numero2} é o maior`
    }
}