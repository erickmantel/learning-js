function converter(){
    var saida = document.getElementsByTagName('p')[0]
    var valor = Number(prompt('Digite uma temperatura em °C (Celsius)').replace(',','.'))
    
    //conversões
    var Kelvin = valor + 273.15
    var Fahrenheit = (valor * 9/5) + 32

    saida.innerHTML = ''
    saida.innerHTML += `<p><b>${Kelvin}</b>°K (Kelvin)</p>`
    saida.innerHTML += `<p><b>${Fahrenheit}</b>°F (Fahrenheit)</p>`
    
}



//(32 °C × 9/5) + 32 = 89,6 °F



// lógica vai converter de celcius para Kelvin e Fahrenheit nessa ordem