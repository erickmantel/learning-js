function input (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert('{ERRO] Digite um numero válido')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ""
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')//crio o elemento option dentro do select a cada loop
            item.text = `${n} x ${c} = ${n*c}`//multiplico o numero pelo contador do for até 10 a cada loop
            tab.appendChild(item)//acesso o objeto tab e crio no html via dom usando o js uma tag filho option já que a var item cria um elemento
        }
    }


}
