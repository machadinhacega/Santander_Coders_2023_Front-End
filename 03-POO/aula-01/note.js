console.clear()

class Quadrado {
    constructor (largura, altura) {

        if (isNaN(largura) || isNaN(altura))
            throw "base e altura devem ser numeros";
        this.largura = largura;
        this.altura = altura;
        this.cor = undefined;
    }
    calcularArea(){
        return this.largura * this.altura
    }
    calcularPerimetro() {
        return this.largura*2 + this.altura*2;
    }
    imprimir() {
        return `<div style='width:${this.largura}px; height:${this.altura}px;
                background-color: ${this.cor || "blue"} '></div>`
    }
}


// const q = new Quadrado(10,'b')
const q = new Quadrado(10, 10)

q.cor = 'azul'

console.log(Quadrado);
console.log(q);
console.log(q.calcularArea());
console.log(q.calcularPerimetro());


console.log('\n \n');

const qNovo = new Quadrado(10,20)

// No console:
// document.imprimir()



// CIRCULO
class Circulo {
    constructor(numero, cor = 'red'){
        this.raio = numero
        this.cor = cor
    }
    area(){
        return Math.PI * Math.pow(this.raio, 2)
    }
    perimetro(){
        return 2 * Math.PI * this.raio
    }
    diametro(){
        return 2 * this.raio
    }
    imprimir(){
       document.write(`<div style='width: ${this.diametro()}px; height: ${this.diametro()}px; 
                border-radius: 100%; background-color: ${this.cor}'></div>`)
    }
}

const bolinha = new Circulo(50,'#ffcbdb')
bolinha.imprimir()


console.log('\n \n');

