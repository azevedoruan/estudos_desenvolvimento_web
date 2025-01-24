let frase = 'hello world';

(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
    console.log(`Parametro: ${frase}`)
})()