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

console.log(listaTarefas);
console.log('\n###################################################\n\n');









// • Editar uma tarefa salva
const editarNome = (lista, id) => nome => lista.find(tarefa => tarefa.id === id).nome = nome
editarNome(listaTarefas, 6)('Pet the CAT')

const editarStatus = (lista, id) => status => lista.find(tarefa => tarefa.id === id).status = status
editarStatus(listaTarefas, 6)(true)


console.log(listaTarefas);
console.log('\n###################################################\n\n');








// // • Remover uma tarefa salva
const removerTarefa = (lista, id) => {
    const index = lista.indexOf(lista.find(tarefa => tarefa.id === id))
    lista.splice(id)
}

removerTarefa(listaTarefas, 6)

console.log(listaTarefas);
console.log('\n###################################################\n\n');










// • Listar todas as tarefas salvas
const listarTodasTarefas = (lista) => {
    lista.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.nome} \nStatus: ${tarefa.status} \n-------------------------`)
    });
}
listarTodasTarefas(listaTarefas)

console.log('\n###################################################\n\n');










// • Obter uma tarefa, através de um parâmetro (id)
const buscarId = (lista, id) => lista.filter(tarefa => tarefa.id === id)

console.log(buscarId(listaTarefas, 1));

console.log('\n###################################################\n\n');




