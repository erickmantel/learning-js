var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 7

/* O method do objetc date retorna em array os valores dos dias da semana...

    Domingo 0
    Segunda 1
    Terça   2
    Quarta  3
    Quinta  4
    Sexta   5
    Sabado  6

*/

switch (diaSem) {
    case 0: 
        console.log('Domingo')
    break

    case 1:
        console.log('Segunda-feira')
    break

    case 2:
        console.log('Terça-feira')
    break

    case 3:
        console.log('Quarta-feira')
    break

    case 4:
        console.log('Quinta-feira')
    break

    case 5:
        console.log('Sexta-feira')
    break

    default:
        console.log('[ERRO] Dia invalido!')
    break
}

//poderia usar o if tbm mas nesse caso o fica melhor usando o switch.