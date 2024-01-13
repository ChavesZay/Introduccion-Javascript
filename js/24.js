const carrito=[
    {nombre:'Leche', precio:500},
    {nombre:'Confites', precio:700},
    {nombre:'Helado', precio:600},
    {nombre:'Chocolate', precio:900},
 ];

//METODOS SOLO PARA ARREGLOS

 //ForEach: solo muestra 
//carrito.forEach(product=>console.log(product.nombre))
arreglo1=carrito.forEach(product=>product.nombre)


 //Map: map te crea un nuevo arreglo de lo que esta iterrando

arreglo2=carrito.map(product=>product.nombre);


console.log(arreglo1)
console.log(arreglo2)