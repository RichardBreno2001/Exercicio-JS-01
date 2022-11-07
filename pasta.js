var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var texto = window.document.querySelector('p.hora')
var fundo = window.document.querySelector('body#corpo')
var img = window.document.querySelector('img#imagem')
function carregar() {
    if (hora>6 && hora < 12) {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'yellow'
            img.src = 'imagens/manhã.jpeg'
    } else if (hora >= 12 && hora < 18) {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'blue'
            img.src = 'imagens/tarde.jpeg'
    } else {
            texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
            fundo.style.background = 'blue'
    }
}