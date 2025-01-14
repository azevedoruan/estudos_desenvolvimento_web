function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.querySelector('input#nascimentotxt')
    var res = document.getElementById('res')
    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero = ''
        if (sex[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
        }

        if (idade >= 0 && idade < 10) {
            // criança
            img.setAttribute('src', `imagens/${genero}/child.jpg`)
        } else if (idade >= 10 && idade < 25) {
            // jovem
            img.setAttribute('src', `imagens/${genero}/teen.jpg`)
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', `imagens/${genero}/adult.jpg`)
        } else {
            // idoso
            img.setAttribute('src', `imagens/${genero}/old.jpg`)
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}