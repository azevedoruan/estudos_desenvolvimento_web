function contar() {
    var start = Number(document.querySelector('input#start').value)
    var end = Number(document.querySelector('input#end').value)
    var step = Number(document.querySelector('input#step').value)

    var result = ''

    if (start.length == 0 || end.length == 0 || step.length == 0 || start >= end) {
        result = 'Impossível de contar!'
    } else {

        for (var i = start; i < end; i += step) {
            result += `${i} 👉 `
            if (i >= end - step) {
                result += '🏁'
            }
        }
    }

    var res = document.querySelector('div#res')
    res.style.paddingTop = '20px'
    res.innerHTML = 'Contando...<br>' + result
}
