// Objeto sem modelar, sem classe
const agenda = {
    contatos: [
        {
            nome: 'Iza', 
            celular: '8598128',
            email: 'izav.machado@gmail.com',
        }
    ],
    adicionar: function(contato){
        this.contatos.push(contato);
    }
  }
  
  const a = agenda;
  a.adicionar({nome:'saulo', celular:'5', email:'saulo@gm'})
  console.log(a);
  console.log(a.contatos[0]);
  console.log(a.contatos[1]);
  
  
  
  
  class Agenda {
    // contatos como atributos privados
    #contatos = [] 
    constructor(){ }
    set contatos(contato){
      this.#contatos.push(contato);
    }
    get contatos(){
      return this.#contatos
    }
    adicionarContato(contato){
      this.contatos = contato
      // Por que não chama o set direto? Ou coloca o push aqui em vez de chamar algume q chama?
      // pra nao manipular direto o atributo privado 
      // acho que tem a ver com questão de encapsulamento
      // separação de responsabilidades
    }
  }
  
  const ag = new Agenda();
  
  ag.contatos = {nome:'saulo', celular:'5', email:'saulo@gm'}
  console.log(ag);
  console.log(ag.contatos);
  
  ag.adicionarContato({nome: 'iza', celular:'125',email:'izav@gm'} )
  console.log(ag.contatos);