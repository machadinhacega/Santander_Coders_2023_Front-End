// # Lógica de Programação - Projeto final

// ## O que?
// Desenvolver, utilizando os conceitos abordados ao longo do módulo, 
// uma aplicação de lista de tarefas (ToDo List).

// ---

// ## Requisitos
// Dentre as funcionalidades, espera-se que seja possível:

// - Adicionar uma tarefa
// - Editar uma tarefa salva
// - Remover uma tarefa salva
// - Listar todas as tarefas salvas
// - Obter uma tarefa, através de um parâmetro (id)

// ---

// ## Observações
// Não haverá a persistência das tarefas em banco de dados. 
// Para isso, podem utilizar um array para ser a lista das tarefas cadastradas.
console.clear();


// const listaTarefas = []
const listaTarefas = [
    {id: 0, nome: 'iniciar projeto', status: true},
    {id: 1, nome: 'Adicionar uma tarefa', status: false},
    {id: 2, nome: 'Editar uma tarefa salva', status: false},
    {id: 3, nome: 'Remover uma tarefa salva', status: false},
    {id: 4, nome: 'Listar todas as tarefas salvas', status: false},
    {id: 5, nome: 'Obter uma tarefa, através de um parâmetro (id)', status: false}
]







// - Adicionar uma tarefa

function addTarefa(lista, nome, status){
    lista.push({
        id: lista.length,
        nome: nome,
        lembrete: '',
        descricao:'',
        status: status
    })
}
addTarefa(listaTarefas, 'beber água', false)

// __________________________________________________________________________________________



// - Editar uma tarefa salva

function editaTarefa(lista, id, status){
    lista.forEach(tarefa => {
        if(tarefa.id === id){
            tarefa.status = status
        }
    });
}

editaTarefa(listaTarefas, 2, 'TESTE')


// __________________________________________________________________________________________



// - Remover uma tarefa salva

function removeTarefa(lista, id){
    lista.forEach(tarefa => {
        if (tarefa.id === id){
            // [!!!]encontra a posicao da tarefa pelo index dela, mas deixa um espaço vazio no array
            delete lista[lista.indexOf(tarefa)]
        }
    });
}

// removeTarefa(listaTarefas, 3)


// __________________________________________________________________________________________




// - Listar todas as tarefas salvas

function listarTarefas(lista){
    lista.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.nome} \nStatus: ${tarefa.status} \n-------------------------`)
    });
}

listarTarefas(listaTarefas)





// __________________________________________________________________________________________

// - Obter uma tarefa, através de um parâmetro (id)

function obterTarefa(lista, id){
    return lista.find(item => item.id === id)
}

console.log(`
Achar pelo id:`)
console.log(obterTarefa(listaTarefas, 6))
console.log('\n')


// function obterTarefa(lista, id){
//     // forEach
//     lista.forEach(tarefa => {
//         if(tarefa.id === id){
//             console.log(tarefa)
//         }
//     });
// }
// obterTarefa(listaTarefas, 6)

// __________________________________________________________________________________________