function analisar(){
    let res = document.getElementById('res')

    let agora = new Date
    let dia = agora.getDate()
    let mes = agora.getMonth() // array necessário 
    let nomemeses = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez']
    let nomedosmeses = nomemeses[mes]
    let ano = agora.getFullYear()
    let semana = agora.getDay() // array necessário
    let nomesDias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
    let nomeDiaSemana = nomesDias[semana]
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    res.textContent = ''
    res.innerHTML += `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${nomedosmeses}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana <mark>${nomeDiaSemana}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`
    
    

    console.log(nomedosmeses)   
}




