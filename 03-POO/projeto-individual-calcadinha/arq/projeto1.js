// PROJETO INDIVIDUAL

// 1
// Pensar em um catálogo/cardápio digital em HTML

// 2
// Modelar as entidades necessárias imaginando possibilidade de cadatro, exibição, edição e deleção de itens (CRUD)

// 3
// Utilizar todos os conceitos vistos em sala de aula até o momento, de forma que faça sentido para o contexto do projeto

// 4
// Criar pelo menos uma função utilizando prototype

// 5
// Fazer um diagrama de classes UML simplificado


// EXTRA
// Criar um HTML para exibir os itens
// Criar formulário para cadastro dos itens


// PAINEL ADMINISTRATIVO
// TELA PARA USUÁRIO


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


class Catalogo {
  itens = []
  constructor(){}
  
  adicionar(item){
    this.itens.push(item)
  }
  excluir(item){
    this.itens.slice(item.id)
  }
}



const catalogo = new Catalogo
catalogo.adicionar(new Petisco())
catalogo.adicionar(new Bebida())
catalogo.adicionar(new Bebida())
catalogo.adicionar(new Bebida())




// console.log(petisco);
// console.log(bebida);
console.log(catalogo);



// class Item {
//     constructor(id, nome, desc, preco, img){
//         this.id = id
//         this.nome = nome
//         this.desc = desc
//         this.preco = preco
//         this.img = img
//     }
// }

// class Bebidas extends Item {
//     constructor(id, nome, desc, preco, img, ingerdientes){
//         super(id, nome, desc, preco, img)
//         this.ingerdientes = ingerdientes
//     }
// }

// class Petiscos extends Item {
//     constructor(id, nome, desc, preco, img, podeConter, quantidade = '1'){
//         super(id, nome, desc, preco, img)
//         this.podeConter = podeConter
//         this.quantidade = quantidade
//     }
// }

// class Catalogo {
//     constructor(itens){
//         this.itens = itens
//     }
//     cadastrarItem(){}
    
//     editarItem(){}
    
//     deletarItem(){}
    
//     exibirItem(){}
// }


// this.id = id
// this.nome = nome
// this.desc = desc
// this.preco = preco
// this.img = img


// const produtos = [
//     {
//         id:1, 
//         nome:'feijao verde', 
//         desc:'serve aproximadamente 2 pessoas', 
//         preco:20.00,
//         grupo:'petiscos',

//     },
//     {
//         id:2, 
//         nome:'caldinho de feijao', 
//         desc:'serve aproximadamente 1 pessoas', 
//         preco:15.00,
//         grupo:'petiscos',
//     },

// ]


// const cab=`<tr>
//                 <th>id</th>
//                 <th>Nome</th>
//                 <th>Descrição</th>
//                 <th>Preço</th>
//                 <th>Grupo</th>
//             </tr>`
// document.querySelector("table thead").innerHTML = cab;



// function imprimir(){
//     const lista = produtos.map(function(item){
//         return `<tr>
//                     <td>${item.id}</td>
//                     <td>${item.nome}</td>
//                     <td>${item.desc}</td>
//                     <td>${item.preco}</td>
//                     <td>${item.grupo}</td>
//                 </tr>`;
//     }).join("");
//     document.querySelector("table tbody").innerHTML = lista;
// }


// imprimir();



// {/* <tr>
// <th>Nome</th>
// <th>Quantidade</th>
// <th>Preço</th>
// </tr> */}



// const produtos = [
//     {
//         nome: 'Critica do fascismo',
//         quantidade: 20,
//         preco: 45
//     },
//     {
//         nome: 'Desafio poliamoroso',
//         quantidade: 16,
//         preco: 50
//     },
//     {
//         nome: 'Manifesto comunista',
//         quantidade: 32,
//         preco: 26
//     },
// ]


// function imprimir(){
//     const lista = produtos.map(function(item){
//         return `<tr>
//                     <td>${item.nome}</td>
//                     <td>${item.quantidade}</td>
//                     <td>${item.preco}</td>
//                 </tr>`;
//     }).join("");
//     document.querySelector("table tbody").innerHTML = lista;
// }


// imprimir();



// // Exemplo do ALAN para solucionar um problema ai de classe abstrata
// class AbstractClass {
//     constructor() {
//       if (new.target === AbstractClass) {
//         throw new Error("Cannot instantiate abstract class");
//       }
//     }
  
//     abstractMethod() {
//       throw new Error("Abstract method must be overridden");
//     }
//   }
  
// //   Fazendo dessa forma, a class não pode ser instanciada pelo new, sendo usada só no extends.
  
// class ConcreteClass extends AbstractClass {
//     concreteMethod() {
//       console.log("ConcreteClass implementation of concreteMethod");
//     }
  
//     abstractMethod() {
//       console.log("ConcreteClass implementation of abstractMethod");
//     }
//   }