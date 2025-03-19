function contar(){
    var resultado= document.getElementById('resultado')
    resultado.innerHTML += `<p><h1>Contando de 1 até 10</h1></p>`

    for(var i=1; i<=10; i++){
        resultado.innerHTML += ` ${i} &#x1F449;`
    }
    

}