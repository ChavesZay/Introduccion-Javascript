///Aray Methods

const meses =['Enero','Abril', 'Mayo','Junio','Julio','Obtuble','Diciembre']
const carrito=[
    {nombre:'Leche', precio:500},
    {nombre:'Confites', precio:700},
    {nombre:'Helado', precio:600},
    {nombre:'Chocolate', precio:900},
 ];

 //for Each
 meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log('Si existe')
    }
 })

 //iNCLUDES PARA ARRAY PLANOS
 let resultado =meses.includes('Marzo')

 //SOME IDEAL PARA ARREGLOS DE OBJETOS
 resultado=carrito.some(function(producto){
    return producto.nombre==='Chocolate'
 })
//Arrow function
 resultado=carrito.some(producto=>producto.nombre==='Chocolate');

 //Reduce

 resultado=carrito.reduce(function(total, producto){
    return total+producto.precio
 },0); //SUMA EL TOTAL DEL PRECIO DE LOS PRODUCTOS


 //FILTER
 resultado=carrito.filter(producto=>producto.precio>600)
 resultado=carrito.filter(producto=>producto.nombre ==='Chocolate')
 resultado=carrito.filter(producto=>producto.nombre !=='Chocolate')

 console.log(resultado)
