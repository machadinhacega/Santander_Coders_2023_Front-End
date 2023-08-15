console.clear()
// Operadores de Coalescência nula (??)
// falsy

let user;
// user = 'Iza'
// console.log(`Olá ${username}`)

let username = user ?? 'Visitante'
console.log(`Olá ${username}  \n`)



user = {name: 'João',}

//  Se nao tiver 'user' quebra o código
// username  = user.name ? user.name : 'Visitante';


//  Se nao tiver 'user' NÃO quebra o código
// username  = user && user.name ? user.name : 'Visitante';
username  = user?.name ? user.name : 'Visitante';
console.log(`Faaaala ${username}  \n`);


let novoUser = {name: '',}
// entende uma string vazia como falsy
// entende um 0 como um falsy também
username = novoUser?.name || 'Visitante'
console.log(`Olá ${username}  \n`)

// vazio e 0 não é falsy
username = novoUser?.name ?? 'Visitante'
console.log(`Olá ${username}  \n`)


// ___________________________________________________________________________________________________________________________________________________________________________________________

console.clear()

/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/


// 10 (20%) = 12


const somaImposto = (taxaImposto, custo) => {
    // taxaImposto = Number(taxaImposto.split('%').at(0))/100
    const impostoSobreProduto = taxaImposto/100*custo
    
    produto = {
    custo: custo,
    impostoSobreProduto: impostoSobreProduto,
    novoValor: custo +  impostoSobreProduto
    }
    return `Custo do produto: ${produto.custo}
Imposto sobre produto ${produto.impostoSobreProduto}
Novo Valor: ${produto.novoValor}
`
}
console.log(somaImposto(20, 10))


// Função de alta ordem
const somaImpostoAlta = taxaImposto =>  custo => custo/(1-taxaImposto)
console.log(somaImpostoAlta(0.20)(10))

console.clear()


// ______________________________________________________________________________________


// const fibonacci = (n) => {
//     let termoAnterior = 0
//     let termoAtual = 1
//     fib = []
    
//     for (i=0; i <= n; i++){
//         fib.push(termoAnterior)

//         let proximoTermo = termoAtual + termoAnterior
//         termoAnterior = termoAtual
//         termoAtual = proximoTermo
        
//     }
//     return fib
// }

// console.log(fibonacci(5))
// // 0 1 1 2 3 5 8 13


const fibonacci = (n) => {
    fib = [0, 1]
    
    for (i = 2; i <= n-1; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(5))
// 0 1 1 2 3 5 8 13
