function contar(){
    var output = document.getElementsByTagName('p')[0] // acesso a saida
    

    
}

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
            alert('Oi');
        }, 100); // Tempo suficiente para o botão voltar ao normal antes do alert
    }, 100); // Tempo de animação do clique

}