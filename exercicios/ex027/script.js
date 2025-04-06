function tabuada(){
    var saida = document.getElementById('saida')
    var numero = Number(document.getElementById('n1').value)

    saida.innerHTML = `<h1>Tabuada de ${numero}</h1>`
    for(c=1;c<=10;c++){
        saida.innerHTML += `${numero} X ${c} = <b>${numero*c}</b><br>`
    }


}