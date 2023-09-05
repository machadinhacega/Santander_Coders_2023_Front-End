class Catalogo {
    static id = 1
    constructor(){
        this.listaItens = [];
        this.edit = false
    }
    
    salvar(){
        this.adicionarItem()
        this.limparCampos()
        Item.mostrarTabela()
        this.exportar()
    }
    exportar(){
        console.log(catalogo.listaItens);
        return catalogo.listaItens
    }
    
    adicionarItem(){
        if (this.edit === false){
            if(Item.validarDados()){
                this.listaItens.push(Item.lerDados())
            }
        } else {
            this.atualizarItem()
        }
    }

    limparCampos(){
        document.getElementById('nomeProduto').value = ''
        document.getElementById('descProduto').value = ''
        document.getElementById('valorProduto').value = ''
        document.getElementById('imgProduto').value = ''
    }

    deletarItem(id, nome){
        if(confirm(`Tem certeza que deseja excluir o item ${id} (${nome})?`)){

            for (let i = 0; i < this.listaItens.length; i++) {
                if(this.listaItens[i].id === id){
                    this.listaItens.splice(i,1)
                    document.getElementById('tbody').deleteRow(i)
                }
            }
        }
    }

    editarItem(id, nome){
        this.edit = true
        document.getElementById('btn-save').innerText = 'Atualizar'
        for (let i = 0; i < this.listaItens.length; i++) {
            if(this.listaItens[i].id === id){
                document.getElementById('nomeProduto').value = this.listaItens[i].nome;
                document.getElementById('descProduto').value = this.listaItens[i].desc;
                document.getElementById('valorProduto').value = this.listaItens[i].valor;
                document.getElementById('imgProduto').value = this.listaItens[i].img;
            }
        }
        this.id = id
    }
    
    atualizarItem(){
        for (let i = 0; i < this.listaItens.length; i++) {
            if(this.listaItens[i].id === this.id){
                this.listaItens[i].nome = document.getElementById('nomeProduto').value
                this.listaItens[i].desc = document.getElementById('descProduto').value
                this.listaItens[i].valor = document.getElementById('valorProduto').value
                this.listaItens[i].img = document.getElementById('imgProduto').value
            }
            
        }
        


        this.edit = false
        document.getElementById('btn-save').innerText = 'Salvar'

    }

}


class Item {
    constructor(){
    }

    static lerDados(){
        let item = {}
        item.id = Catalogo.id++
        item.nome = document.getElementById('nomeProduto').value;
        item.desc = document.getElementById('descProduto').value;
        item.valor = document.getElementById('valorProduto').value;
        item.img = document.getElementById('imgProduto').value;

        return item

    }

    static validarDados(){
        let mensagem = 'Você precisa preencher: \n'
        if(document.getElementById('nomeProduto').value === ''){
            mensagem += '• Nome do item \n'
        }
        if(document.getElementById('valorProduto').value === ''){
            mensagem += '• Valor do item \n'
        }
        if (mensagem != 'Você precisa preencher: \n'){
            alert(mensagem)
        } else {
            return true
        }
        return false
    }

    static mostrarTabela(){
        let tbody = document.getElementById('tbody')
        // !!!!!!!!!!!! NÃO ENTENDI PQ TEM QUE TER ESSE INNERHTML
        tbody.innerHTML = ''

        // !!!!!!!!!!!! NÃO ENTENDI MTO BEM O PORQUE ESSE FOR
        for (let i = 0; i < catalogo.listaItens.length; i++) {
            tbody.innerHTML += `
            <tr class="align-baseline">
            <td class="text-corPrimeira">${catalogo.listaItens[i].id}</td>
            <td class="text-corPrimeira">${catalogo.listaItens[i].nome}</td>
            <td class="text-corPrimeira">${catalogo.listaItens[i].desc}</td>
            <td class="text-corPrimeira">${catalogo.listaItens[i].valor}</td>
            <td><img src="${catalogo.listaItens[i].img}" height="50px" alt=""></td>
            <td>
                <button onclick="catalogo.editarItem(${catalogo.listaItens[i].id},'${catalogo.listaItens[i].nome}')"class="border-0"><img src="./assets/img/edit.svg" alt="editar"></button>
                <!-- Aqui cada botão deletar recebe o id do item q ele pertence -->
                <button onclick="catalogo.deletarItem(${catalogo.listaItens[i].id},'${catalogo.listaItens[i].nome}')" class="border-0"><img src="./assets/img/delete.svg" alt="deletar"></button>
            </td>
        </tr>
        `
            
        }

    }
}


const catalogo = new Catalogo
