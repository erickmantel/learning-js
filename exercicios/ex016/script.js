function input() {
    let saida = document.getElementById('saida');
    let anoNasc;
    let Nasc;

    while (true) {
        anoNasc = prompt('Em que ano você nasceu?');

        if (anoNasc === null) {
            return; // Sai da função se o usuário clicar em "Cancelar"
        }

        Nasc = Number(anoNasc);

        if (Nasc !== 0 && !isNaN(Nasc)) {
            break; // Sai do loop se o valor for válido
        } else {
            alert('Digite um número válido');
        }
    }

    let objectDate = new Date();
    let anoAtual = objectDate.getFullYear();
    let ano = Number(anoAtual);

    let idade = ano - Nasc;

    saida.innerHTML = `Quem nasceu em ${Nasc} vai completar <strong>${idade}</strong> anos em <strong>${ano}</strong>`;
}