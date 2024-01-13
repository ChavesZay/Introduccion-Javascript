//"use strict"; // Utilizar el codigo JS de forma estricta, usando las buenas practicas
const producto={
    nomProducto:'Leche', 
    precio:400,
    disponible:true
}

const producto2={
    nomProducto:'Leche', 
    precio:400,
    disponible:true
}

//FREEZE
Object.freeze(producto) //No deja modificar al objeto
producto.imagen='imagen.png' //No deja agregar
delete producto.precio //No deja eliminar
producto.nomProducto='nuevo nombre' //No deja modificar un valor
console.log(Object.isFrozen(producto)) //Para ver si un objeto esta sellado
console.log(producto)

//SEAL
Object.seal(producto2) //No deja agregar o eliminar propiedades del objeto, pero si modificar los valores de las propiedades existentes
producto2.imagen='imagen.png' //No se agrega
delete producto2.precio //No deja eliminar
producto2.nomProducto='nuevo nombre' //Si deja modificar un valor
console.log(producto2)
