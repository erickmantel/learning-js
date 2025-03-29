function calcular(){
    var output = document.getElementsByTagName('p')[0]
    var nome = prompt('Qual é o nome do aluno?')
    var nota1 = Number(prompt(`Primeira nota de ${nome}: `).replace(',','.'))
    if(isNaN(nota1)){//verificação de valor
        alert('[ERRO] Digite um valor válido')
        return
    }
    var nota2 = Number(prompt(`Segunda nota de ${nome}`).replace(',','.'))
    if(isNaN(nota2)){//verificação de valor
        alert('[ERRO] Digite um valor válido')
        return
    }
    

    var media = ((nota1+nota2)/2).toFixed(2)

    output.innerHTML = ''
    if(media<=3.0){
        output.innerHTML += `<p><h1>Analisando a situação de ${nome}</h1></p>`
        output.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <b>média é ${media}</b></p>`
        output.innerHTML += `<p>Com média abaixo de 3,0, o aluno está REPROVADO</p>`
    }else if(media<=6.0){
        output.innerHTML += `<p><h1>Analisando a situação de ${nome}</h1></p>`
        output.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <b>média é ${media}</b></p>`
        output.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em RECUPERAÇÃO</p>`
    }else{
        output.innerHTML += `<p><h1>Analisando a situação de ${nome}</h1></p>`
        output.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <b>média é ${media}</b></p>`
        output.innerHTML += `<p>Com média acima de 6,0, o aluno está APROVADO</p>`
    }

}













/*
toFixed(2) não esquecer de arredondar as casas decimais
Média Situação
Abaixo de 3,0 REPROVADO
Entre 3,0 e 6,0 RECUPERAÇÃO
Acima de 6,0 APROVADO

*/