function analisar(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date
    var res = document.getElementById('resultado')
    var dia = agora.getDate()
    let mes = agora.getMonth() // é por array o return do metodo
    let ano = agora.getFullYear() 
    let sem = agora.getDay()  //mesmo esquema array tbm
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    //voltar pras aulas dnv ainda não cheguei em arrays!!!!!! parei por enquanto.

    var dsemanaNum = objetoData.getDay();
    var dsemanaNome = '';
    switch (dsemanaNum){
        /*Da pra resolver isso usando vetores, é mais facil escreve menos*/
        case 0:
            dsemanaNome = 'Dom';
            break;

        case 1: 
            dsemanaNome = 'Seg';
            break;

        case 2: 
            dsemanaNome = 'Ter';
            break;

        case 3:
            dsemanaNome = 'Qua';
            break;
        
        case 4:
            dsemanaNome = 'Qui';
            break;

        case 5:
            dsemanaNome = 'Sex';
            break;

        case 6: 
            dsemanaNome = 'Sab';
            break;
    }
    
    console.log(mes);
}