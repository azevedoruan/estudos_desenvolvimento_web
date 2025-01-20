let materials = ['hélio', 'hidrogênio', 'mercúrio']

let res1 = materials.map((m) => { return m.length })

// quando só há um parâmetro, é desnecessário os parênteses.
// quando o corpo da função é simples (uma linha) pode ignorar as chaves {}
let res2 = materials.map(m => m.length)

console.log(res1)
console.log(res2)
