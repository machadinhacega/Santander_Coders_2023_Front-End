console.clear();

// const listaTarefas = []
const listaTarefas = [
    {id: 0, nome: 'Iniciar projeto', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: true},
    {id: 1, nome: 'Adicionar uma tarefa', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: false},
    {id: 2, nome: 'Editar uma tarefa salva', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: false},
    {id: 3, nome: 'Remover uma tarefa salva', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: false},
    {id: 4, nome: 'Listar todas as tarefas salvas', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: false},
    {id: 5, nome: 'Obter uma tarefa, através de um parâmetro (id)', lembrete:'08:00', descricao: 'Lorem ipsum dolor sit amet...', status: false}
]


// • Adicionar uma tarefa
//     id | nome | lembrete | descrição | status


// • Editar uma tarefa salva


// • Remover uma tarefa salva


// • Listar todas as tarefas salvas


// • Obter uma tarefa, através de um parâmetro (id)




// let titulo = document.getElementById('titulo').value;
// document.getElementById('tarefaTitulo').textContent = 'hmmmmmm';
// const listaTeste = ['titulo', 'horario', 'descrição']


document.getElementById('tarefas').textContent = "";

for (let i = 0; i < listaTarefas.length; i++) {
    document.getElementById('tarefas').innerHTML += `
    
<div class="container bg-body-secondary gray-default rounded-4 px-4 py-3 mb-4 position-relative">
<h2 class="mb-0 fs-5 lh-1 mb-2 black-default">${listaTarefas.at(i).nome}</h2>
<div class="d-flex align-items-baseline">
    <i class="fa fa-clock-o me-2" aria-hidden="true"></i>
    <p class="mb-0 fs-7">${listaTarefas.at(i).lembrete}</p>
</div>          
<p class="mb-0 fs-8">${listaTarefas.at(i).descricao}</p>
<a href="" class="icon-link-trash"><i class="fa fa-trash-o position-absolute top-0 end-0 me-3 mt-3" aria-hidden="true"></i></a>
</div>  
`
    
}

    // // Saída
    // document.getElementById('veiculo').value = "";
    // document.getElementById('veiculo').focus();
    
    // // document.getElementById('veiculos').textContent = veiculos;
    
    // document.getElementById('veiculos').textContent = "";
    // for (let i = 0; i < veiculos.length; i ++){
    //     document.getElementById("veiculos").innerHTML += `<li>${veiculos[i]}</li>`
    // }




// __________________________________________________________________________________________



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

let tarefaNome = document.getElementById('inputNome').value;

addTarefa(listaTarefas, tarefaNome, false)

console.log(listaTarefas)
console.log(listaTarefas)




// <label for="inputNome" class="form-label">Nome</label>
// <input type="text" class="form-control bg-transparent rounded-0 text-green fw-light" id="inputNome" aria-describedby="nomeTarefa">


// <label for="">Digite o nome do veículo</label>
// <input type="text" id="veiculo" autofocus>
// <button onclick="adicionar()">Adicionar</button>



// function adicionar() {
//     // Entrada
//     let veiculo = document.getElementById('veiculo').value;
//     if (veiculo){
//         veiculos.push(veiculo)
//     }
//     // Processamento

//     // Saída
//     document.getElementById('veiculo').value = "";
//     document.getElementById('veiculo').focus();
    
//     // document.getElementById('veiculos').textContent = veiculos;
    
//     document.getElementById('veiculos').textContent = "";
//     for (let i = 0; i < veiculos.length; i ++){
//         document.getElementById("veiculos").innerHTML += `<li>${veiculos[i]}</li>`
//     }

//     // console.log(veiculos)


// }





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