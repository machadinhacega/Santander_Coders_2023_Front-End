// nome, desc, preco, img
// this.nome = nome
// this.desc = desc
// this.preco = preco
// this.img = img

class Produto {
    // static id = 0
    constructor(){
      this.id = 1
      this.listaProdutos = [];
  
      // ++Produto.id
  
  }
  
    salvar(){
      let produto = this.lerDados()
  
      if(this.validarCampos(produto)){
        this.adicionar(produto)
      }
    }
  
    adicionar(produto){
      this.listaProdutos.push(produto)
      this.id ++
      console.log(this.listaProdutos)
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
  
  
    excluir(){
  
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