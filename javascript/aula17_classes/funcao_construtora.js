function Animal(nome, especie, cor) {

    this.getNome = function () {
        return nome
    }

    this.getEspecie = function () {
        return especie
    }

    this.getCor = function () {
        return cor
    }

    this.setNome = function (novoNome) {
        nome = novoNome
    }

    this.setCor = function (novaCor) {
        cor = novaCor
    }

    // método público
    this.rosnar = function () {
        console.log('Arghshhhhhh')
    }

    // método privado
    let doSomething = function () {
        // do something
    }
}

const leao = new Animal('Leão', 'Felino', 'Albino')
console.log(leao.getNome())
console.log(leao.getEspecie())
console.log(leao.getCor())
leao.rosnar()
leao.setCor('Preto')
console.log(leao.getCor())

// RESULTADO:
// Leão
// Felino
// Albino
// Arghshhhhhh
// Preto