function calcular() {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('INSIRA UM NÚMERO PELO MENOS !')
    } else {
        let n = Number(num.value)
        let c = 0
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}