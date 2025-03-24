var valor = new Date()

function meuclick() {
    var res = document.getElementById('res')
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${valor}</mark></p>`
}