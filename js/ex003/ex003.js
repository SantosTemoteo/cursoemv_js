function verificar() {
    var inicio = document.getElementById(`txtinicio`)    
    var fim = document.getElementById(`txtfim`)
    var passo = document.getElementById(`txtpasso`)
    var res1 = document.getElementById(`res1`)
    let res2 = document.getElementById(`res2`)
 
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`PREENCHA TODOS OS CAMPOS PARA EXECUTAR O PROGRAMA!`)
    } else if (i <= f) {  
        res1.innerHTML = `Contando...`  //daqui não consegui pois coloquei as variáveis numéricas fora do else kkkkjj.
        if(passo.value == 0){
            window.alert(`PASSO INVÁLIDO! CHANGED TO 1!`)
                p = 1
            }
        for(let c = i; c <= f; c += p) {
            res2.innerHTML += `${c} ` // 
        } // EU FIQUEI 3H OLHANDO PRA ISSO E N VI Q ISSO TAVA EMCIMA DO RES.INNER >:f
            
    } else if (i >= f) {
        res1.innerHTML = `Contando...`  //daqui não consegui pois coloquei as variáveis numéricas fora do else kkkkjj.
        if(passo.value == 0){
        window.alert(`PASSO INVÁLIDO! CHANGED TO 1!`)
            p = 1
        }
        for(let c = i; c >= f; c -= p) {
            res2.innerHTML += `${c} ` // 
        }
    }
}              