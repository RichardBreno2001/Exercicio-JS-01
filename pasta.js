var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var texto = window.document.querySelector('p.hora')
var fundo = window.document.querySelector('body#corpo')
var img = window.document.querySelector('img#imagem')
function carregar() {
    if (hora>6 && hora < 12) {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'linear-gradient (to left, rgba(200, 187, 12, 0.816), rgba(146, 146, 5, 0.866)'
            img.src = 'imagens/manhã.jpeg'
    } else if (hora >= 12 && hora < 18) {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'linear-gradient(to left, blue,rgb(12, 12, 98)'
            img.src = 'imagens/tarde.jpeg'
    } else {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'to left, rgb(1, 1, 22),rgb(0, 0, 0)'
            img.src = 'imagens/noite.jpeg'
    }
}