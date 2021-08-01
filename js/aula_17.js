// Objetos
let amigo = {nome:'José', sexo:'M', peso:85.4,
engordar(p=0){      //engordar é uma função
console.log('engordou')
this.peso += p       //palavra autoreferencia ao obj.  this peso + valor passado (inicialmente 0)
}}

console.log(amigo)      //os atributos e valores
console.log(typeof amigo)       // Object

amigo.engordar(2)       // Própria variável amigo tem funcionalidades dentro dela, engordou 2kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)     // mostra só o atributo nome do obj. amigo
