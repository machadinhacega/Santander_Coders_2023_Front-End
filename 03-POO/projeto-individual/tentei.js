let modelNomeProduto = 'Batata frita'
let modelDescProduto = 'mto boa'
let modelValorProduto = 25.50
let modelImgProduto = 'https://assets.unileversolutions.com/recipes-v2/236946.jpg'
let modelIngedientes = ''
let modelPodeConter = [lactose, glutem]
let modelQuantidade = '400g'



class Item {
    static id = 0
      constructor(nome, desc, preco, img){
        this.id = ++Item.id
        this.nome = nome
        this.desc = desc
        this.preco = preco
        this.img = img
    }
}


  
class Bebida extends Item {
constructor(nome, desc, preco, img, ingerdientes){
    super(nome, desc, preco, img)
    this.tipo = 'bebida'
    this.ingerdientes = ingerdientes
    }
}

class Petisco extends Item {
constructor(nome, desc, preco, img, podeConter, quantidade = '1'){
    super(nome, desc, preco, img)
    this.tipo = 'petisco'
    this.podeConter = podeConter
    this.quantidade = quantidade
    }
}


class Catalogo {
constructor(){
    this.id = 1;
    this.catalogo = [];
    }

    lerDados(){
        
    }

}



const catalogo = new Catalogo();
const item = new Item();
const bebida = new Bebida();
const petisco = new Petisco();

console.log(catalogo);