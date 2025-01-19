function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    //var hora = data.getHours()  
    hora = 18
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#84c9fa'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#ffd6a0'
    }else{
        //Boa NOITE
        img.src = 'noite.png'
        document.body.style.background = '#4632b8'
    }
}    