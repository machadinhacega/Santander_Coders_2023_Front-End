console.clear()

const tripulacao = [
    {nome: 'Luffy', recompensa: 3000000000, alcunha: 'Caçador de Piratas' },
    {nome: 'Zoro', recompensa: 1111000000, alcunha: 'Caçador de Piratas' },
    {nome: 'Nami', recompensa:366000000 , alcunha: 'Gata Ladra' },
    {nome: 'Sanji', recompensa:1032000000 , alcunha: 'Perna Negra' },
    {nome: 'Chopper', recompensa:1 , alcunha: 'Amante de Algodão Doce' },
    {nome: 'Robin', recompensa: 930000000 , alcunha: 'Criança Demônio' },
]

console.log('###########  ForEach  ###########');
tripulacao.forEach((tripulante, index, tripulacao) => {
    console.log(index);    
    console.log(tripulante.nome);
    console.log('');
});


console.log('###########  For in  ###########');
for (const prop in tripulacao) {
            console.log(prop);
        }

console.log('')
console.log('###########  For of  ###########');

console.log('')
console.log('► Usando todo o objeto');
for (const tripulante of tripulacao) {
    console.log(`${tripulante.nome} vale ${tripulante.recompensa}`);
}

console.log('')
console.log('► Usando somente umna parte do objeto (desestruturação)');
for (const {nome} of tripulacao) {
    console.log(`${nome} faz parte do bando`);
}