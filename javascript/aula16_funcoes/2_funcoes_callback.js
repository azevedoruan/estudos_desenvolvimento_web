function doSomething() {
    return 'fazendo algo...'
}

function imprimir(callbackfn) {
    // do something first...
    console.log(callbackfn())
}

imprimir(doSomething)



// OUTRO EXEMPLO
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas) // resultado: [6.5, 5.2, 3.6]