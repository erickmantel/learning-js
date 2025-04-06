function contagem(){
    var output = document.getElementById('saida') 
    let num = Number(document.getElementById('fnum').value)   
    output.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    var c = 0
    while (c <= num){
        output.innerHTML += `${c} &#x1F449;`
        c++
    }
    output.innerHTML += ` &#x1F3C1`
}
















//função de animação do botão
function apertarButao(){
    var botao = document.querySelector('.b1')

    //adiciona a classe antes do alert
    botao.classList.add('b1-active')

    // Aguarda um pequeno tempo para renderizar a animação
    setTimeout(() => {
        // Remove a classe para simular o clique antes do alert aparecer
        botao.classList.remove('b1-active');

        // Outro pequeno atraso antes de exibir o alert
        setTimeout(() => {
            
        }, 100); // Tempo suficiente para o botão voltar ao normal antes do alert
    }, 100); // Tempo de animação do clique

}