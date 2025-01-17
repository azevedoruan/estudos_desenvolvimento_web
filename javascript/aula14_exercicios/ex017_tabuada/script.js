function gerarTabuada() {
    let num = document.querySelector('input#numero')
    let tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var i = 1; i < 10; i++) {
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${i} = ${i * n}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}