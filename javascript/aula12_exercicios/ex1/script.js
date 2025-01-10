function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'manhã-perfil.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde-perfil.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'noite-perfil.png'
        document.body.style.background = '#515154'
    }
}