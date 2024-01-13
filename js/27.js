//Clases
//POO

class Producto{

    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de:$ ${this.precio}`
    }
}


//Herencia
//Libro hereda de producto
class Libro extends Producto{
    constructor(nombre, precio,isbn){
        super(nombre, precio) //Constructor padre
        this.isbn=isbn
    }

    formatearProducto(){
        return `${super.formatearProducto()}y su isbn es: ${this.isbn}`
    }
}

const producto2=new Producto('Monitor', 800);
const producto3=new Producto('Laptop', 700);
const libro=new Libro('JavaScript la Revolucion', 30000, '23456789987654')

console.log(producto2)
console.log(producto3.formatearProducto())
console.log(libro.formatearProducto())