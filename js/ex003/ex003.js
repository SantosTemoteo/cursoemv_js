function verificar() {
    var inicio = document.getElementById(`txtinicio`)    
    var fim = document.getElementById(`txtfim`)
    var passo = document.getElementById(`txtpasso`)
    var res1 = document.getElementById(`res1`)
    let res2 = document.getElementById(`res2`)  // let facilita em relaão ao escopo, passando a não mais existir fora desse bloco.
 
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`PREENCHA TODOS OS CAMPOS PARA EXECUTAR O PROGRAMA!`)
    } else if (i <= f) {  // contagem crescente
        res1.innerHTML = `Contando...`  
        if(passo.value == 0){
            window.alert(`PASSO INVÁLIDO! CHANGED TO 1!`)
                p = 1
            }
        for(let c = i; c <= f; c += p) {
            res2.innerHTML += `${c} \u{1F603}`   //Código de emoji no JavaScript. Só funciona entre crases.
        } 
            
    } else if (i >= f) { // contagem decrescente
        res1.innerHTML = `Contando...` 
        if(passo.value == 0){
        window.alert(`PASSO INVÁLIDO! CHANGED TO 1!`)
            p = 1
        }
        for(let c = i; c >= f; c -= p) {
            res2.innerHTML += `${c} `   // 
        }
    }
}              