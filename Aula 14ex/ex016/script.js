function input (){
    var inicioValue = document.getElementById('inicio').value;
    var fimValue = document.getElementById('fim').value;
    var passoValue = document.getElementById('passo').value;
    var output = document.getElementById('output');


    if (inicioValue.lenght === 0 || fimValue.lenght === 0 || passoValue.length === 0){
        output.innerHTML = ''
        alert('[ERRO] Faltam dados!]')
    }else{
        output.innerHTML = ''
        output.innerHTML = 'Contando... <br> '
        var inicio = Number(inicioValue);
        var fim = Number(fimValue);
        var passo = Number(passoValue);

        if(passo <= 0){
            //Ou perguntar um novo valor para atribuir aqui
            alert('Passo invalido! Considerando PASSO 1')
            passo = 1
            
        }
        if (inicio<fim){
            //contagem crescente
            for(inicio;inicio<=fim;inicio+=passo){
                output.innerHTML += ` &#128073;${inicio} `       
              
            }
        }else{
            //contagem decrescente
            for(inicio;inicio>=fim;inicio-=passo){
                output.innerHTML += `&#128073;${inicio}`
            }
        }
        
    }

    

}
