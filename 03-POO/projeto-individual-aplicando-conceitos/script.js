class Catalogo {
    static id = 1
    
    constructor(){
        this.classe;

        this.listaItens = [];
        this.edit = false
    }
    
    formPetisco(){
        document.getElementById('btn-petisco').classList.add('btn-active')
        document.getElementById('btn-bebida').classList.remove('btn-active')
        
        document.getElementById('formPetisco').classList.remove('d-none')
        document.getElementById('formBebida').classList.add('d-none')
        
        this.classe = Petisco
        return true
    }
    
    formBebida(){
        document.getElementById('btn-bebida').classList.add('btn-active')
        document.getElementById('btn-petisco').classList.remove('btn-active')
        
        document.getElementById('formBebida').classList.remove('d-none')
        document.getElementById('formPetisco').classList.add('d-none')

        this.classe =  Bebida
        return true        
    }

    
    
    salvar(){
        this.addItem()

    }
    

    addItem(){
        if(this.validarDados()){
            this.item = this.classe.lerInfoEspecifica()
            this.listaItens.push(this.item)
            console.log(this.listaItens);
            
        }
    }

    validarDados(){
        let mensagemErro = 'Você precisa preencher:'
        if(catalogo.classe === undefined){
            mensagemErro += '\n• Tipo de item'
        }
        if(document.getElementById('nomeProduto').value === ''){
            mensagemErro += '\n• Nome do item'
        }
        if(document.getElementById('valorProduto').value ===''){
            mensagemErro += '\n• Valor do item'
        }
        
        if(mensagemErro != 'Você precisa preencher:'){
            console.log(mensagemErro);
            document.getElementById('mensagemErro').innerHTML= mensagemErro
            document.getElementById('mensagemErro').classList.replace('d-none', 'mensagemErro')
            return false
        }
        
        return true
    }


    limparCampos(){
        document.getElementById('formPetisco').classList.add('d-none')
        document.getElementById('formBebida').classList.add('d-none')
        document.getElementById('btn-petisco').classList.remove('btn-active')
        document.getElementById('btn-bebida').classList.remove('btn-active')
        this.classe = undefined

        document.getElementById('nomeProduto').value = ''
        document.getElementById('valorProduto').value = ''
        document.getElementById('imgProduto').value = ''
        document.getElementById('quantProduto').value = ''
        document.getElementById('porcaoProduto').value = ''
        document.getElementById('ingredientesProduto').value = ''
        
        document.getElementById('Glutem').checked = false
        document.getElementById('Lactose').checked = false
        document.getElementById('Frutos-do-mar').checked = false
        document.getElementById('Ovo').checked = false
        document.getElementById('Pimenta').checked = false
    }

    





    // salvar(){
    //     this.adicionarItem()
    //     Item.mostrarTabela()
    //     this.exportar()
    // }
    // exportar(){
    //     console.log(catalogo.listaItens);
    //     return catalogo.listaItens
    // }
    
    // adicionarItem(){
    //     if (this.edit === false){
    //         if(Item.validarDados()){
    //             this.listaItens.push(Item.lerDados())
    //             this.limparCampos()
    //         }
    //     } else {
    //         this.atualizarItem()
    //         this.limparCampos()
    //     }
    // }

    // limparCampos(){
    //     document.getElementById('nomeProduto').value = ''
    //     document.getElementById('descProduto').value = ''
    //     document.getElementById('valorProduto').value = ''
    //     document.getElementById('imgProduto').value = ''
    // }

    // deletarItem(id, nome){
    //     if(confirm(`Tem certeza que deseja excluir o item ${id} (${nome})?`)){

    //         for (let i = 0; i < this.listaItens.length; i++) {
    //             if(this.listaItens[i].id === id){
    //                 this.listaItens.splice(i,1)
    //                 document.getElementById('tbody').deleteRow(i)
    //             }
    //         }
    //     }
    // }

    // editarItem(id, nome){
    //     this.edit = true
    //     document.getElementById('btn-save').innerText = 'Atualizar'
    //     for (let i = 0; i < this.listaItens.length; i++) {
    //         if(this.listaItens[i].id === id){
    //             document.getElementById('nomeProduto').value = this.listaItens[i].nome;
    //             document.getElementById('descProduto').value = this.listaItens[i].desc;
    //             document.getElementById('valorProduto').value = this.listaItens[i].valor;
    //             document.getElementById('imgProduto').value = this.listaItens[i].img;
    //         }
    //     }
    //     this.id = id
    // }
    
    // atualizarItem(){
    //     for (let i = 0; i < this.listaItens.length; i++) {
    //         if(this.listaItens[i].id === this.id){
    //             if(document.getElementById('nomeProduto').value){
    //                 this.listaItens[i].nome = document.getElementById('nomeProduto').value
    //             }
    //             this.listaItens[i].desc = document.getElementById('descProduto').value
    //             if(document.getElementById('valorProduto').value){
    //                 this.listaItens[i].valor = document.getElementById('valorProduto').value
    //             }
    //             this.listaItens[i].img = document.getElementById('imgProduto').value
    //         }
            
    //     }
        


    //     this.edit = false
    //     document.getElementById('btn-save').innerText = 'Salvar'

    // }

}

class Item{
    constructor(item){
        this.item = item;
    }
    
    static lerInfoGeral(){
        this.item = {
            id: Catalogo.id++,
            nome: document.getElementById('nomeProduto').value,
            valor: document.getElementById('valorProduto').value,
            img: document.getElementById('imgProduto').value,
        }
        return this.item
    }
}


class Petisco extends Item{
    constructor(item,porcao, podeConter){
        super(item)
        this.porcao = porcao
        this.podeConter = podeConter
    }
    static lerInfoEspecifica(){
        Item.lerInfoGeral()
        this.item.porção = document.getElementById('porcaoProduto').value
        
        this.item.podeConter = []
        document.getElementById('Glutem').checked ? this.item.podeConter.push('Glútem') : 0
        document.getElementById('Lactose').checked ? this.item.podeConter.push('Lactose') : 0
        document.getElementById('Frutos-do-mar').checked ? this.item.podeConter.push('Frutos do mar') : 0
        document.getElementById('Ovo').checked ? this.item.podeConter.push('Ovo') : 0
        document.getElementById('Pimenta').checked ? this.item.podeConter.push('Pimenta') : 0
        

        return this.item
    }
}

class Bebida extends Item{
    constructor(item, ingredientes){
        super(item)
        this.ingredientes = ingredientes
    }
    static lerInfoEspecifica(){
        Item.lerInfoGeral()
        this.item.ingredientes = document.getElementById('ingredientesProduto').value;
        

        return this.item
    }
}





// console.log(Bebida);

// class Item {
//     constructor(){
//     }
    
//     static lerDados(){
//         let item = {}
//         item.id = Catalogo.id++
//         item.nome = document.getElementById('nomeProduto').value;
//         item.desc = document.getElementById('descProduto').value;
//         item.valor = parseFloat(document.getElementById('valorProduto').value);
//         item.img = document.getElementById('imgProduto').value;
//         return item

//     }

//         static validarDados(){
//         let mensagem = 'Você precisa preencher: \n'
//         if(document.getElementById('nomeProduto').value === ''){
//             mensagem += '• Nome do item \n'
//         }
//         if(document.getElementById('valorProduto').value === ''){
//             mensagem += '• Valor do item \n'
//         }
//         if (mensagem != 'Você precisa preencher: \n'){
//             alert(mensagem)
//         } else {
//             return true
//         }
//         return false
//     }

//     static mostrarTabela(){
//         let tbody = document.getElementById('tbody')
//         tbody.innerHTML = '';

//         for (let i = 0; i < catalogo.listaItens.length; i++) {
//             tbody.innerHTML += `
//             <tr class="align-baseline">
//             <td class="text-corPrimeira">${catalogo.listaItens[i].id}</td>
//             <td class="text-corPrimeira">${catalogo.listaItens[i].nome}</td>
//             <td class="text-corPrimeira">${catalogo.listaItens[i].desc}</td>
//             <td class="text-corPrimeira">${catalogo.listaItens[i].valor}</td>
//             <td><img src="${catalogo.listaItens[i].img}" height="50px" alt=""></td>
//             <td>
//                 <button onclick="catalogo.editarItem(${catalogo.listaItens[i].id},'${catalogo.listaItens[i].nome}')"class="border-0"><img src="./assets/img/edit.svg" alt="editar"></button>
//                 <!-- Aqui cada botão deletar recebe o id do item q ele pertence -->
//                 <button onclick="catalogo.deletarItem(${catalogo.listaItens[i].id},'${catalogo.listaItens[i].nome}')" class="border-0"><img src="./assets/img/delete.svg" alt="deletar"></button>
//             </td>
//         </tr>
//         `
            
//         }

//     }
// }


const catalogo = new Catalogo

