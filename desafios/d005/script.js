function converter(){
    var output = document.getElementById('output')//acessei via js o objeto 
    
    var valor = Number(prompt('Digite uma distancia em metros (m)').replace(',', '.'))//usei replace para trocar um caractere por outro só funciona em string
    
    var qui = (valor/1000).toFixed(2).replace('.',',')  
    var hec = (valor/100).toFixed(2).replace('.',',')
    var dec = (valor/10).toFixed(2).replace('.',',')

    var deci = (valor*10).toFixed(2)
    var cen = (valor*100).toFixed(2)
    var mil = (valor*1000).toFixed(2)

    output.innerHTML = ''

    output.innerHTML += `<h1>A distância de ${valor} metros, corresponde a...</h1>`
    output.innerHTML += `<p>${qui} quilômetros (Km)</p>`      
    output.innerHTML += `<p>${hec} hectômetros (Hm)</p>`  
    output.innerHTML += `<p>${dec} decâmetros (Dam)</p>`  //com virgula


    output.innerHTML += `<p>${deci} decímetros (Dm)</p>`   //com ponto
    output.innerHTML += `<p>${cen} centímetros (Cm)</p>`
    output.innerHTML += `<p>${mil} milímetros (Mm)</p>`   
    
    
}



