// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.random() * (max - min) + min;

console.clear()

const sorteados = []

do {
    let numeroSorteado = Math.round(Math.random() * 59 + 1)
    while (sorteados.includes(numeroSorteado)){
        numeroSorteado = Math.round(Math.random() * 59 + 1)
    }
    sorteados.push(numeroSorteado)
} while (sorteados.length < 6);

console.log(sorteados);