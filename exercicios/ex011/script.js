function media(){
    let nome = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Qual sua primeira nota de ${nome}?`))
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}`))
    
    let res = document.getElementById('resultado')
    res.innerHTML += `<p>Calculando a média final de <mark>${nome}</mark></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>`
    let m = (nota1+nota2)/2
    res.innerHTML += `A média final será ${m}`
    if (m >= 6){
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">Meus parabéns!</strong></p>`
    }else{
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">Estude um pouco mais!</strong></p>`
    }   
       
}