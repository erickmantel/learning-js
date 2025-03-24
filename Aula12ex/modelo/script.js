

function input (){
    var dateobj = new Date ()
    var hora = dateobj.getHours()
    var res = document.getElementById('res')
    res.innerHTML(hora)
}
