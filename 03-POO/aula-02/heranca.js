// HERANÇA
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    
  }
  
  class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
      super(nome, idade);
      this.cpf = cpf;
      this.rg = rg;
    }
  }
  
  class Empresa extends Pessoa {
    constructor(nome, idade, cnpj, im) {
      super(nome, idade);
      this.cnpj = cnpj;
      this.im = im;
    }
  }
  
  const p = new Cidadao('bruno', 30, 1234, 45566);
  
  console.log(p instanceof Pessoa)
  console.log(p instanceof Cidadao)
  console.log(p instanceof Empresa)


  



  class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    cumprimento(){
      return 'Olá';
    }
  }
  
  class Aluno extends Pessoa {
    constructor(nome, idade){
      super(nome, idade);
    }
    cumprimento(){
      return 'Olá professor!'
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome, idade){
      super(nome, idade);
    }
    cumprimento(){
      return 'Olá Aluno!'
    }
  }