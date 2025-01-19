function entrada () {
    var texto = document.getElementById('texto').value
    var saida = document.getElementById('saida')

    if(texto === 'Brasil'){
        saida.innerHTML = 'Você é Brasileiro!'
        saida.style.color = 'green'
       
    }else{
        saida.innerHTML = 'Você é Estrangeiro!'
        saida.style.color = 'red';
    }
    
    }