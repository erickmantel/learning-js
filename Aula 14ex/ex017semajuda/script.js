function input(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert('[ERRO] Digite um numero válido')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
        }
        
        
    }
}