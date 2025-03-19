function contar(){
    var output = document.querySelector('p')
    
    output.innerHTML = ''
    output.innerHTML = `<h1>Números pares de 1 até 10</h>`
    c = 1
    while (c<=10){
        if(c % 2 == 0){
            output.innerHTML += `&nbsp&#x1F449;&nbsp${c}`
        }
        
        c++
    }

}


// &#x1F449;