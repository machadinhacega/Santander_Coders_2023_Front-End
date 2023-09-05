


class Produto {
    // static id = 0
    constructor(){
      this.id = 1
      this.listaProdutos = [];
      this.editId = null;
  
  }
  
    salvar(){
      let produto = this.lerDados()
  
      if(this.validarCampos(produto)){
        if(this.editId === null){
          this.adicionar(produto)
        } else {
          this.atualizar(this.editId, produto)
        }
      }
  
      this.mostrarTabela()
      this.cancelar()
    }
  
  
    mostrarTabela(){
      let tbody = document.getElementById('tbody')
      tbody.innerText = ''
  
      for (let i = 0; i < this.listaProdutos.length; i++) {
        let tr = tbody.insertRow();
  
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_desc = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_img = tr.insertCell();
        let td_acoes = tr.insertCell();
  
        td_id.innerText = this.listaProdutos[i].id;
        td_nome.innerText = this.listaProdutos[i].nomeProduto;
        td_desc.innerText = this.listaProdutos[i].descProduto;
        td_valor.innerText = this.listaProdutos[i].valorProduto;
        td_img.innerText = this.listaProdutos[i].imgProduto;
  
        td_id.classList.add('text-center')
        
        let imgEdit = document.createElement('img');
        imgEdit.src = './assets/img/edit.svg';
        imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.listaProdutos[i]) +")")
        imgEdit.classList.add('me-2')
  
        let imgDelete = document.createElement('img');
        imgDelete.src = './assets/img/delete.svg'
        // passando o id de cada produto para o elemento deletar
        imgDelete.setAttribute("onclick", "produto.deletar("+ this.listaProdutos[i].id +")")
  
        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);
  
      }
    }
  
  
    adicionar(produto){
      produto.valorProduto = parseFloat(produto.valorProduto)
      this.listaProdutos.push(produto)
      this.id ++
    }
  
    atualizar(id, item){
      for (let i = 0; i < this.listaProdutos.length; i++) {
        if(this.listaProdutos[i].id === id){
          this.listaProdutos[i].nomeProduto = item.nomeProduto
          this.listaProdutos[i].descProduto = item.descProduto
          this.listaProdutos[i].valorProduto = item.valorProduto
        }      
      }
    }
  
  
    preparaEdicao(item){
      this.editId = item.id
  
      document.getElementById('nomeProduto').value = item.nomeProduto;
      document.getElementById('descProduto').value = item.descProduto;
      document.getElementById('valorProduto').value = item.valorProduto;
      // document.getElementById('imgProduto').value = item.imgProduto;
  
      document.getElementById('btn-save').innerText = 'Atualizar'
    }
  
    lerDados(){
      let produto = {};
      produto.id = this.id
      produto.nomeProduto = document.getElementById('nomeProduto').value;
      produto.descProduto = document.getElementById('descProduto').value;
      produto.valorProduto = document.getElementById('valorProduto').value;
      produto.imgProduto = document.getElementById('imgProduto').value;
  
      return produto;
    }
  
    validarCampos(produto){
      let mensagem = ''
      if (produto.nomeProduto === '') {
        mensagem += '- Nome do Produto está vazio\n'
      }
      if (produto.valorProduto === '') {
        mensagem += '- Valor do Produto está vazio\n'
      }
      if(mensagem != '') {
        alert(mensagem)
        return false
      }
      return true
    }
  
  
    cancelar(){
      document.getElementById('nomeProduto').value = ''
      document.getElementById('descProduto').value = ''
      document.getElementById('valorProduto').value = ''
      document.getElementById('imgProduto').value = ''
  
      document.getElementById('btn-save').innerText = 'Salvar';
      this.editId = null;
    }
  
  
    deletar(id){
  
      if(confirm('Deseja remover o item '+ id)){
  
        let tbody = document.getElementById('tbody')
        
        for (let i = 0; i < this.listaProdutos.length; i++) {
          if(this.listaProdutos[i].id === id){
            this.listaProdutos.splice(i, 1)
            // pra atualizar a tabela
            tbody.deleteRow(i)
          }
        }
      }
    }
  
    editar(){
      alert('EDITA')
    }
  
  }
  
  
  
  const produto = new Produto()
  
  
  
  
  
  {/* <tr class="align-baseline">
  <td class="text-corPrimeira">0001</td>
  <td class="text-corPrimeira">batata frita</td>
  <td class="text-corPrimeira">aprox. 400g</td>
  <td class="text-corPrimeira">19.90</td>
  <td><img src="https://assets.unileversolutions.com/recipes-v2/236946.jpg" height="50px" alt=""></td>
  <td>
      <button class="border-0"><img src="./assets/img/edit.svg" alt="editar"></button>
      <button onclick="produto.excluir()" class="border-0"><img src="./assets/img/delete.svg" alt="deletar"></button>
  </td>
  </tr> */}
  
  // this.ingerdientes = ingerdientes
  // this.podeConter = podeConter
  // this.quantidade = quantidade