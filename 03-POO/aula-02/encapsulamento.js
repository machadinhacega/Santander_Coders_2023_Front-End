// / ENCAPSULAMENTO
// SET & GET
class Conta {
    #numeroConta;
    constructor(nome, cpf){
      this.nome = nome
      this.cpf = cpf
      this.numeroConta = Utils.numeroConta();
    }
    get numeroConta() {
      return this.#numeroConta;
    }
    set numeroConta(numero) {
      this.#numeroConta = numero;
    }
  }
  
  class Utils {
    static totalContas = 0;
    constructor(){}
  
    static numeroConta() {
      return ++Utils.totalContas; 
    }
  }

