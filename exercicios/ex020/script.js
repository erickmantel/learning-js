var saida = document.getElementsByTagName('p')[0]
function input(){   
    var estacao  // aqui fica a estação do ano
    
    while(true){
        var valor = prompt('Digite o mês por extenso (ex:Maio)')

        if (valor === null) {
            return; // Sai da função se o usuário clicar em "Cancelar"
        }
    
        if(valor == 'Janeiro' || valor == 'Fevereiro' || valor == 'Dezembro'){
            estacao = 'Verao'
        }else if (valor == 'Março' || valor == 'Abril' || valor == 'Maio'){
            estacao = 'Outono'
        }else if (valor == 'Junho' || valor == 'Julho' || valor == 'Agosto'){
            estacao = 'Inverno'
        }else if (valor == 'Setembro' || valor == 'Outubro' || valor == 'Novembro'){
            estacao = 'Primavera'
        }else{
            alert('Digite um mes válido.')
            continue
        }

        break // sair do loop se o mês for valido
    } 

    saida.innerHTML = `<p>A estação do ano é: ${estacao}</p>`

}
