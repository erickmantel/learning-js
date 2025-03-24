function contar(){
    var output = document.getElementsByTagName('p')[0]
    
    output.innerHTML += `<h1>Contando de 1 até 10, marcando os pares<h1>`

    let c = 1
    while (c <= 10){
        
        

        if (c % 2 == 0){
            output.innerHTML += `&#x1F449;<mark><b>${c}</b></mark>`
        }else{
            output.innerHTML += `&#x1F449;${c}` 
        }

        c++
    }    
}



//        &#x1F449;



//o operador de resto da divisão é o % se restar 0 é par se restar 1 é impar