/*

let num = [5,2,8,5,4,7] // vetor
num.sort()      // método interno coloca o vetor em ordem
num[6] = 9    //Acrescentar um valor. se depois do sort, acrescenta no final do vetor. Se ANTES,é acrescentado e arrumado no sort
console.log(num)
console.log(`O vetor tem ${num.length} posições`)   // mostra comprimento do vetor
console.log(`O prinemro valor do vetor é ${num[1]}`)    // mostra o valor na posição requerida no vetor 

*/

let valores = [8,1,7,4,2,9]
console.log(valores)
valores.sort() // ordenar

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}    // pos == position
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}     // Maneira mais simplificada.

let posit = valores.indexOf(1)
if (posit == -1) {
    console.log(`Café com farinha!`)
} else {
    console.log(`O valor 8 está na posição ${valores.indexOf(1)} parece estranho mas é porque tem um sort() ali.`)

}