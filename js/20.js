//Arrow Functions
const sumar=(n1,n2)=>{
    console.log(n1+n2)
}
// Cuando es solo de una linea
const sumar2 =(n1,n2)=> console.log(n1+n2);
sumar(1,2)
sumar2(1,3)

// Cuando es solo de una linea y un solo parametro
const aprendiendo= tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript')


const meses =['Enero','Abril', 'Mayo','Junio','Julio','Obtuble','Diciembre']
const carrito=[
    {nombre:'Leche', precio:500},
    {nombre:'Confites', precio:700},
    {nombre:'Helado', precio:600},
    {nombre:'Chocolate', precio:900},
 ];

 
 meses.forEach( mes=>{
    if(mes=='Marzo'){
        console.log('Si existe')
    }
 })

let resultado;

 //resultado=carrito.some(producto=> return producto.nombre==='Chocolate'), cuando hay un return en una solo linea se elimina, porq esta explicito
resultado=carrito.some(producto=> producto.nombre==='Chocolate')

//Arrow function
 resultado=carrito.some(producto=>producto.nombre==='Chocolate');


 resultado=carrito.reduce((total, producto)=> total+producto.precio,0); //SUMA EL TOTAL DEL PRECIO DE LOS PRODUCTOS

 resultado=carrito.filter(producto=>producto.precio>600)
 resultado=carrito.filter(producto=>producto.nombre ==='Chocolate')
 resultado=carrito.filter(producto=>producto.nombre !=='Chocolate')

 console.log(resultado)
