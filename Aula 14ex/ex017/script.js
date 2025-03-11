function input (){
    let numero = Number(document.getElementById('input').value)
    
    if(numero == 0 || numero < 0){
        alert('{ERRO] Digite um numero válido, 0 ou numeros negativos não são permitidos!')
    }else{
        for(c = 1; c <= 10; c++){
            newnumero = numero * c

        }
    }
    //console.log(numero)

}
