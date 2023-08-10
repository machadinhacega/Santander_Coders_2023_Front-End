console.clear()

arrayExemplo = [1, 2, 3, 4]


// ADICIONAR
// Adicionando elemento no final (retorna o novo tamanho da lista)
arrayExemplo.push(5)
// Adicionando elemento no início (retorna o novo tamanho da lista)
arrayExemplo.unshift(0)



// REMOVER
// Removendo o ultimo elemento (retorna o elemento que foi removido)
arrayExemplo.pop()
// Removendo o primeiro elemento (retorna o elemento que foi removido)
arrayExemplo.shift()



// RETORNAR
// Retorna um elemento baseado no index
// o elemento da posição 1
arrayExemplo.at(1)
// o elemento da posição 2 de tras pra frente
arrayExemplo.at(-2)



// JUNTAR
// cria um novo array com os arrays 'juntados'
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayConcat = array1.concat(array2)



// TESTAR
// Retorna um Booleano 
// Se TODOS os elementos satisfizerem a condição, ele retorna um true
// Se pelo menos 1 elemento NÃO satisfizer a condição, ele retorna um false
const impar = [1, 3, 5, 7, 9]
const every = impar.every(num => num % 2 !== 0);
console.log(every)
// some()
// tipo o every, mas só de 1




// FILTRAR
// Retorna os elementos que satisfizerem uma condição
const numerosIniciais = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filter = numerosIniciais.filter(num => num % 2 === 0)
// OBS: Arrow function com dois paramentros
// const filter = numerosIniciais.filter((num, index) => num % 2 === 0 && index == 0)
console.log(filter)
// Exemplo: Pode usar o filtro pra excluir. Caça o index e exclui



// BUSCAR
// Retorna o primeiro elemento que passar num teste
const buscarNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const find = buscarNumeros.find(item => item % 2 === 0);
console.log(find);



// MAP
const mapNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const map = mapNumeros.map(num => num * 2);
console.log(map);

const tripulacao = [
    {nome: 'Luffy', recompensa: 3000000000, alcunha: 'Caçador de Piratas' },
    {nome: 'Zoro', recompensa: 1111000000, alcunha: 'Caçador de Piratas' },
    {nome: 'Nami', recompensa:366000000 , alcunha: 'Gata Ladra' },
    {nome: 'Sanji', recompensa:1032000000 , alcunha: 'Perna Negra' },
    {nome: 'Chopper', recompensa:1 , alcunha: 'Amante de Algodão Doce' },
    {nome: 'Robin', recompensa: 930000000 , alcunha: 'Criança Demônio' },
]

// SPRED ... (esparrama o array)
// pega os dados e bota num objeto só
const recompensaGrande = tripulacao.map(elemento => {
    return {
        // esparrama os elementos do objeto tripulação
        ... elemento,
        // add um boolean a partir do que foi pedido
        recompensaGrande: elemento.recompensa > 1032000000
    }
})
console.log(recompensaGrande)



// REDUCE
const reduceNumber = [1, 2, 3, 4, 5]
const reduce = reduceNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reduce)



// reverse()

// sort()