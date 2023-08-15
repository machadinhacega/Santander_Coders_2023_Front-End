console.clear();

// const listaTarefas = []
const listaTarefas = [
    {id: 0, nome: 'Iniciar projeto', status: true},
    {id: 1, nome: 'Adicionar uma tarefa', status: false},
    {id: 2, nome: 'Editar uma tarefa salva', status: false},
    {id: 3, nome: 'Remover uma tarefa salva', status: false},
    {id: 4, nome: 'Listar todas as tarefas salvas', status: false},
    {id: 5, nome: 'Obter uma tarefa, através de um parâmetro (id)', status: false}
]


// • Adicionar uma tarefa
const adicionarTarefa = (lista, nome) => {
    lista.push({
        id: (lista.at(-1).id)+1,
        nome: nome,
        status: false
    })
}

adicionarTarefa(listaTarefas, 'Pet the dog')



// • Editar uma tarefa salva
const editarNome = (lista, id) => nome => lista.find(tarefa => tarefa.id === id).nome = nome
editarNome(listaTarefas, 6)('Pet the CAT')

// Criar uma condição para caso seja passado um id que não tem
// let novoUser = {name: '',}
// // entende uma string vazia como falsy
// // entende um 0 como um falsy também
// username = novoUser?.name || 'Visitante'
// console.log(`Olá ${username}  \n`)
// // vazio e 0 não é falsy
// username = novoUser?.name ?? 'Visitante'
// console.log(`Olá ${username}  \n`)

const editarStatus = (lista, id) => status => lista.find(tarefa => tarefa.id === id).status = status
editarStatus(listaTarefas, 6)(true)






// // • Remover uma tarefa salva
const removerTarefa = (lista, id) => {
    const index = lista.indexOf(lista.find(tarefa => tarefa.id === id))
    delete lista[index]
}

removerTarefa(listaTarefas, 6)






// • Listar todas as tarefas salvas
const listarTodasTarefas = (lista) => {
    lista.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.nome} \nStatus: ${tarefa.status} \n-------------------------`)
    });
}
listarTodasTarefas(listaTarefas)





// • Obter uma tarefa, através de um parâmetro (id)
const buscarId = (lista, id) => lista.filter(tarefa => tarefa.id === id)
buscarId(listaTarefas, 1)
