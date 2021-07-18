/* Retire oscomentários para ver os códigos.

var idade = 67
console.log(`Voce tem ${idade} anos!`)
if (idade < 16) {
    console.log(`Ainda não pode votar D:`)
}   else if (idade < 18 || idade > 65) {
        console.log(`Voto FACULTATIVO!`)
}   else {
        console.log(`Voto OBRIGATÓRIO`)
}

*/
/*

var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
        console.log(`Boa tarde!`)
} else if (hora >= 18 && hora < 24) {
        console.log(`Boa Noite!`)
} else{
        console.log(`Boa Madrugada!`)
}

*/
var agora = new Date()
var diasem = agora.getDay()
 /*
  Para o JS a representação da semana em numeros é:
  Domingo = 0
  Segunda = 1
  Terça = 2
  Quarta = 3
  Quinta = 4
  Sexta = 5
  Sábado = 6
  */
 switch (diasem){
     case 0:
         console.log(`Domingo`)
         break
     case 1:
         console.log(`Segunda`)
         break
     case 2:
         console.log(`Terça`)
         break
     case 3:
         console.log(`Quarta`)
         break
     case 4:
         console.log(`Quinta`)
         break
     case 5:
         console.log(`Sexta`)
         break
     case 6:
         console.log(`Sábado`)
         break
     default:
         console.log(`[ERROR!] Dia Invalido!`)
         break
}