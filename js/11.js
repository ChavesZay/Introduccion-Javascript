const producto={
    nomProducto:'Leche', 
    precio:400,
    disponible:true
}

//Forma anterior
 const precioProduct=producto.precio
 const nomProduct=producto.nomProduct

 console.log(precioProduct)
 console.log(precioProduct)

 //Destructuracion
 const {nombreProducto, precio, disponible}=producto;
 console.log(precio)