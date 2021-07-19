function carregar() {
var msg  = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia :)
    document.body.style.background = "#8BD0B9"
    img.src = "https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?cs=srgb&dl=pexels-torsten-kellermann-955656.jpg&fm=jpg"
}   else if (hora >= 12 && hora < 18) {
    // Boa tarde :D
    document.body.style.background = "#FBC374"
    img.src = "https://images.pexels.com/photos/2340160/pexels-photo-2340160.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2340160.jpg&fm=jpg"
}   else {
    // Boa Noite ;)
        document.body.style.background = "#051d1f"
        img.src = "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?cs=srgb&dl=pexels-sanaan-mazhar-3052361.jpg&fm=jpg"
}
}