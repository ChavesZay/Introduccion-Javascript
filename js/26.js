//POO

/*Object Literal */

const producto={
    nombre: 'Leche',
    percio:500
}

/*Object Constructor */
function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}
function Cliente(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de:$ ${producto.precio}`
}

//Prototypes: Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto= function(){
    return `El producto ${this.nombre} tiene un precio de:$ ${this.precio}`
}

Cliente.prototype.formatearCliente= function(){
    return `El cliente ${this.nombre} tiene un apellido: ${this.apellido}`
}

const cliente=new Cliente('Luis','Chaves')
const producto2=new Producto('Monitor', 800);
const producto3=new Producto('Laptop', 700);

console.log(producto2)
console.log(producto3)
// console.log(formatearProducto(producto2))
// console.log(formatearProducto(cliente))
console.log(producto2.formatearProducto())
console.log(cliente.formatearCliente())



