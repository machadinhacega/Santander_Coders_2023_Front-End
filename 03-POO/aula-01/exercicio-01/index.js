class Retangulo {
    constructor(base, altura, cor = 'red'){
        if(isNaN(base) || isNaN(altura))
        throw "base e altura devem receber apenas numeros"

        this.base = base;
        this.altura = altura;
        this.cor = cor;
    }
    imprimir(){
       document.write(`<div style="width: ${this.base}px; height: ${this.altura}px; background-color: ${this.cor || 'red'}"></div>`)
    }
}

const beemo = new Retangulo(150, 40,'#63bda4')
const beemoClaro = new Retangulo(150, 40,'#d9ffea')


const amarelo = new Retangulo(150, 40,'#ffce39')
const azul = new Retangulo(150, 40,'#15387e')
const beje = new Retangulo(150, 40,'#f5ada8')
const laranja = new Retangulo(150, 40,'#e3770b')

const blank = new Retangulo(0, 50, 'white')

amarelo.imprimir()
azul.imprimir()
beje.imprimir()
laranja.imprimir()
azul.imprimir()
laranja.imprimir()

blank.imprimir()

beemo.imprimir()
beemoClaro.imprimir()
beemoClaro.imprimir()
beemo.imprimir()
beemo.imprimir()


blank.imprimir()
blank.imprimir()



class Triangulo {
    constructor(base, altura, cor='red', direction ){
        this.base = base;
        this.altura = altura;
        this.cor = cor;
        switch(direction){
            case(0): this.direction = 'top';
            break
            case(1): this.direction = 'right';
            break
            case(2): this.direction = 'bottom';
            break
            case(3): this.direction = 'left';
            break
        }
        
    }
    imprimir(){
        document.write(`<div style="width:0px; height: 0px; 
        border: ${this.base}px solid transparent;
        border-${this.direction}: ${this.altura}px solid ${this.cor} "></div>`)
    }
}


const seta = new Triangulo(100, 150, 'red', 0)

seta.imprimir()


