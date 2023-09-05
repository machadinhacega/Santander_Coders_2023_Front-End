console.clear()



// class Utils {
//   static totalContas = 0;
//   constructor(){}

//   static numeroConta() {
//     return ++Utils.totalContas; 
//   }
// }



class Item {
  static id = 0
    constructor(nome, desc, preco, img){
      this.id = ++Item.id
      this.nome = nome
      this.desc = desc
      this.preco = preco
      this.img = img
  }
  adicionar(){}
}

class Bebida extends Item {
  constructor(nome, desc, preco, img, ingerdientes){
      super(nome, desc, preco, img)
      this.ingerdientes = ingerdientes
  }
}

class Petisco extends Item {
  constructor(nome, desc, preco, img, podeConter, quantidade = '1'){
      super(nome, desc, preco, img)
      this.podeConter = podeConter
      this.quantidade = quantidade
  }
}


const petisco = new Petisco()
const bebida = new Bebida()


class Catalogo {
  itens = []
  constructor(){}
  
  adicionar(item){
    this.itens.push(item)
  }
}


const catalogo = new Catalogo
catalogo.adicionar(petisco)
catalogo.adicionar(bebida)
catalogo.adicionar(new Petisco())
catalogo.adicionar(new Petisco())




// console.log(petisco);
// console.log(bebida);
console.log(catalogo);