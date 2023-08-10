atletas.sort((a, b) => {
    const nomeA = a.nome;
    const nomeB = b.nome;
    if (nomeA < nomeB) {
        return -1;
    }
    if (nomeA > nomeB) {
        return 1;
    }
    return 0
})
console.log('Ordenado por nome: ')
console.log(atletas);
