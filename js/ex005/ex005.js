let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#seltab')
let res = document.querySelector('div#res')


let valores = []    // Array usado para analizar os dados.

function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {    // recebe 1 parâmetro
        return true
    } else {
        return false
    }
}

function inLista (n, l) {   //recebe 2 parâmetros
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {       // se ele é um número de 1 a 100 e não está na lista !
        valores.push(Number(num.value))      // Valores = Índice; push = add elemento no vetor.
        let itens = document.createElement('option')
        itens.text = `${num.value} Adicionado`      //sting com possibilidade de interpolação, não precisa de Number pois ja vai ficar como string
        lista.appendChild(itens)
        itens.value = `${Number(num.value)}`        // isso é pra ficar na tag
        res.innerHTML = `Valores: ${valores}`
    } else {
        window.alert('Valor Inválido ou já encontrado na lista!')
    }
    num.value = '' // apaga o que ta na caixa
    num.focus() // define o elemento como ativo no objeto atual.

    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`ADICIONE ALGUM NÚMERO PARA FINALIZAR!`)
    } else {

        let tot = valores.length         // tot = total de elementos do vetor

        let maior = valores[0]      // até o momento o valor do ídice 0 é o maior(se for o único número)
        let menor = valores[0]      // sendo o único número até o momento também é o menor número

        soma = 0
        media = 0

        for(pos in valores) {        // fazer um for para cada posição no vetor(laço de percurso[varrer o vetor inteiro])

            if (valores[pos] > maior) {         //se o valor na posição pos(atual) for maior que o maior valor
                maior = valores[pos]            //o maior valor passa a ser valores[pos] (na posição atual)
            } else if(valores[pos] < menor){
                menor = valores[pos]            //senão se, o valor atual for menor que o do índice, o menor passa a ser o valor do índice atual
            }
            soma += valores[pos]        // vai somando cada valor atual
        }
        media = soma/valores.length     // se por dentro do for ele vai calcular a média para cada for in pos, fora é melhor. pode dividir por tot tambem.

        res.innerHTML = ``
        res.innerHTML += `<p>Tem ${tot} números cadartrados</p>`
        res.innerHTML += `<p>O MAIOR valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>Soma TOTAL = ${soma}</p>`
        res.innerHTML += `<p>Média dos valores = ${media}</p>`
    }
}