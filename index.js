class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

  calcularArea(){
    return this.largura * this.altura
  }

  area(){
  return this.calcularArea()
}   
}


let retangulo_1 = new Retangulo(5, 10);
console.log(retangulo_1.area())

let retangulo_2 = new Retangulo(15, 20);
console.log(retangulo_2.area())

