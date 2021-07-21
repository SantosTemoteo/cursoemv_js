function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')    // f = formulário
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {   // 1º se o cara não digitou o ano(.value = return referênciamento) ; 2º se o valor é acima do ano atual
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`) // elements = mais de 1 elemento selecionado [] necessário para referenciar o Elem. escolhido.
        var idade = ano - Number(fano.value)
        
        var genero = ``

        var img = document.createElement(`img`)    // Criar uma tag img Dinamicamento no JS
        img.setAttribute(`id`,`foto`)    // Cria um id para a img, com nome foto

        if (fsex[0].checked) { // se o elemento de fsex(referenciado) for o [0](masculino)
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "https://images.pexels.com/photos/1190208/pexels-photo-1190208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "https://images.pexels.com/photos/3815263/pexels-photo-3815263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else{
                //idoso
                img.setAttribute("src", "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute("src", "https://images.pexels.com/photos/4453089/pexels-photo-4453089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else if (idade < 20) {
                //jovem
                img.setAttribute("src", "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            } else{
                //idoso
                img.setAttribute("src", "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            }
        }
        res.style.textAlign = `center` // centralizar usando JS
        res.innerHTML = `Detectado ${genero} com ${idade} ano(s).`
        res.appendChild(img) // acrescenta um elemento Filho(herança) à tag
    }
}