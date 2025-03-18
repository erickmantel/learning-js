var resultado = document.getElementById('res')

var randomNumber = Math.floor(Math.random() * (100-1 +1)) +1 

console.log(randomNumber)

function adivinhar(){
   while (true){
        var num = prompt('Qual é o seu palpite?')
        var convertNum = Number(num)

        if (isNaN(convertNum)) {
            alert('Por favor, digite um número válido.')
            continue; // Sai da função se a entrada não for um número válido
        } 
    
        if (convertNum<randomNumber){
            resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MAIOR</b>!</p>`
        }else if (convertNum>randomNumber){
            resultado.innerHTML += `<p>Você falou ${convertNum}. Meu numero é <b>MENOR</b>!</p>`
        }else{
            resultado.innerHTML += `<p><b>PARABÉNS!</b> Você acertou! Eu tinha sorteado o valor ${randomNumber}!</p>`
        }
        
   }
    
}

//Se entrar com numero invalido, o alert vai retornar: "DIgite um numero válido", ao pressionar okay vai perguntar novamente qual é o seu palpite