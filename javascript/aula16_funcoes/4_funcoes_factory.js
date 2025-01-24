function pessoaFactory(nome, anoNascimento, genero) {
    return {
        nome,
        anoNascimento,
        genero,
        alistamento: 'DISPENSADO'
    }
}

console.log(pessoaFactory('Maria Antonieta', '26-02-2000', 'F'))
console.log(pessoaFactory('Rodolfo Lamberc', '28-01-1962', 'M'))