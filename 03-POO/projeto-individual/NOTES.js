console.clear()

class Quadrado {
    #cor;
    #area;

    constructor(base, altura){
        this.#cor = 'blue'
        this.base = base;
        this.altura = altura;
        this.#obterArea();
    }

    get cor(){
        return this.#cor
    }
    set cor(novaCor){
        this.#cor = novaCor
    }

    get area(){
        return this.#area
    }

    #obterArea(){
        this.#area = this.base * this.altura
    }
    mostrarArea(){
        // this.#area = 25
        console.log('A arear é: ', this.#area);
    }
}

const quadrado = new Quadrado (3, 4)
console.log(quadrado);

console.log(quadrado.cor);
quadrado.cor = 'red'
console.log(quadrado.cor);
console.log(quadrado.area);

quadrado.mostrarArea()

// quadrado.cor = 'red'
// console.log(quadrado.cor);













console.log('\n \n');