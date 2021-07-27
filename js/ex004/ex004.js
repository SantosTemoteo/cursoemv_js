function calcular() {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('INSIRA UM NÚMERO PELO MENOS !')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` // value pra php, toda option tem que ter um value pra identificação no servidor.
            tab.appendChild(item)
            c++ // incremento, nunca se esqueça
        }
    }
}