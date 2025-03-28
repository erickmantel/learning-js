function calcular() {
    var output = document.getElementsByTagName('p')[0];
    
    // Pede e converte os valores para número (usando parseFloat)
    var a = parseFloat(prompt('Qual é o valor de a?'));
    var b = parseFloat(prompt('Qual é o valor de b?'));
    var c = parseFloat(prompt('Qual é o valor de c?'));
    
    // Verifica se os valores são números válidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.innerHTML = "Por favor, insira apenas números válidos!";
        return;
    }
    
    // Verifica se é equação do 2º grau (a não pode ser zero)
    if (a === 0) {
        output.innerHTML = "O valor de 'a' não pode ser zero!";
        return;
    }
    
    // Calcula delta
    var delta = b * b - 4 * a * c; // Melhor que b ** 2 para compatibilidade
    
    // Verifica o valor de delta
    if (delta < 0) {
        output.innerHTML = "Não existem raízes reais (Δ < 0)";
    } 
    else if (delta === 0) {
        var x = (-b) / (2 * a);
        output.innerHTML = `Raiz única: x = ${x.toFixed(2)}`;
    } 
    else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        output.innerHTML = `
            x₁ = ${x1.toFixed(2)}<br>
            x₂ = ${x2.toFixed(2)}
        `;
    }
}