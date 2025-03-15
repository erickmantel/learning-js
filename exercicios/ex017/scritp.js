var output = document.getElementById('output') 

function input(){    
    let randomNumber = Math.round(Math.random()*10)
    output.innerHTML += `<p>Acabei de pensar no número <mark><b>${randomNumber}</b></mark>!</p>` 
}

function clean(){
    output.innerHTML = ''          
}






 