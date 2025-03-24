function contar(){
    var output = document.getElementsByTagName('p')[0]
    
    output.innerHTML = ''
    output.innerHTML = `<h1>Contagem regresiva de 10 a 1</h1>`
    c = 10
    while(c >= 1){
        output.innerHTML += `${c}&nbsp;&#x1F449;&nbsp;`
        c--
    }
}