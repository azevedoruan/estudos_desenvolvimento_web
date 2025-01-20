function Carro(modelo, veloMax = 200, delta = 5, cor = 'prata') {
    
    // atributo privado
    let veloAtual = 0

    // atributo público
    this.cor = cor
    this.modelo = modelo

    // metodo público
    this.acelerar = function () {
        if (veloAtual + delta <= veloMax) {
            veloAtual += delta
        } else {
            veloAtual = veloMax
        }
    }

    // método público
    this.getVeloAtual = function () {
        return veloAtual
    }
}

const uno = new Carro('Fiat', 600, 10, 'vermelho')
uno.acelerar()
console.log(uno.modelo)
console.log(uno.getVeloAtual())
console.log(uno.cor)

for (let i = 0; i < 5; i++) {
    uno.acelerar()
}
console.log(uno.getVeloAtual())

// Resultado:
// Fiat
// 10
// vermelho
// 60