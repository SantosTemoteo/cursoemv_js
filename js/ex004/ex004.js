function tabuada() {
    var num = document.getElementById(`txtnumero`)
    var tab = document.getElementById(`seltab`)
   
    if (n.value.length == 0) {
        window.alert('COLOQUE UM NÚMERO')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.inner = ''
        while (c <= 10) {
            var item = document.createElement('option')// criar elemento dentro de JS, esse aqui do tipo option.
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } // NÃO FUNCIONA!
}