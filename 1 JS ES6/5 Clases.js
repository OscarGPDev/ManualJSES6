/**
 * 1.5 Clases
 */
// Tenemos la siguiente clase que es una plantilla para ayudarnos con figuras geométricas
class FiguraGeometrica {
    // Requieren un constructor
    constructor() {
    }
    // Pueden no tener implementación
    area() {

    }
    perimetro() {
        console.log("Este método calcula el perímetro de una figura geométrica")
    }
}

// Podemos aplicar herencia con la palabra 'extends'
class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        // Llama al constructor de la clase padre
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this.actualizarArea = false;
        this.actualizarPerimetro = false;
    }
    // Método de la clase.
    calcularArea() {
        return this._base * this._altura;
    }
    calcularPerimetro() {
        return (this._base + this._altura) * 2;
    }
    // Hay setters, estos se llaman cuando modificamos un atributo de la clase
    set base(base) {
        this._base = base;
        // Si cambia la base tenemos que actualizar el area y perímetro
        this.actualizarArea = true;
        this.actualizarPerimetro = true;
    }
    set altura(altura) {
        this._altura = altura;
        // Si cambia la altura tenemos que actualizar el area y perímetro
        this.actualizarArea = true;
        this.actualizarPerimetro = true;
    }
    // Hay getters, estos se utilizan al consultar el atributo
    get area() {
        if (this.actualizarArea || !this._area) {
            this._area = this.calcularArea();
        }
        return this._area;
    }
    get perimetro() {
        if (this.actualizarPerimetro || !this._perimetro) {
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }
}
// Para crear un objeto de la clase necesitamos usar 'new'
const objetoRectangulo = new Rectangulo(2, 5);
// Salida esperada: 10
console.log(objetoRectangulo.area)
objetoRectangulo.base = 5;
// Salida esperada: 25
console.log(objetoRectangulo.area)
