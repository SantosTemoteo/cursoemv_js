/*
function parimp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimp(10))
*/

/*
function soma(n1, n2){      // função e seus parâmetros (Parâmetro FORMAL)
    return n1 + n2      // retorno da função
}
console.log(soma(2))     // soma entre 2 e 5, isso é a chamada (Parâmetro REAL)
*/


/*
    let v = function(x) {       //jogar uma função dentro de uma variável.
        return x*2
    }
    console.log(v(5))
*/

/*
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}    // fatorial    
    console.log(fatorial(5))
*/


function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}    //fatorial de maneira Recursiva, uma função chama ela mesma. Recursividade.
console.log(fatorial(5))