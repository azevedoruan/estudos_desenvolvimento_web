class Animal {
    constructor(nome, especie, cor) {
        this.nome = nome
        this.especie = especie
        this.cor = cor
    }

    get getNome() {
        return this.nome
    }
    get getEspecie() {
        return this.especie
    }
    get getCor() {
        return this.cor
    }
    set setNome(nome) {
        this.nome = nome
    }
    set setEspecie(especie) {
        this.especie = especie
    }
    set setCor(cor) {
        this.cor = cor
    }

    rosnar() {
        console.log('arghrrrrr')
    }
}

const leao = new Animal('Leão', 'Felino', 'bege escuro')
console.log(leao.getNome)
console.log(leao.getEspecie)
console.log(leao.getCor)
leao.rosnar()
leao.setCor = 'marrom claro'
console.log(leao.getCor)
console.log(leao)

// RESULTADO:
// Leão
// Felino
// bege escuro
// arghrrrrr
// marrom claro