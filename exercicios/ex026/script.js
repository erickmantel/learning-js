function contagem() {
    var n1 = Number(document.getElementById('fn1').value)
    var n2 = Number(document.getElementById('fn2').value)
    var saida = document.getElementById('saida')

    saida.innerHTML = ''

    if (n1 <= n2) {
        // Contagem crescente
        while (n1 <= n2) {
            saida.innerHTML += `${n1} &#x1F449;`; 
            n1++;
        }
    } else {
        // Contagem decrescente
        while (n1 >= n2) {
            saida.innerHTML += `${n1} &#x1F449;`;
            n1--;
        }
    }

    saida.innerHTML += `&#x1F3C1;`

    
}

