
const producto={
    nomProducto:'Leche', 
    precio:400,
    disponible:true
}

const medidas={
    peso:'1kg', 
    medida:'1m'
}
//Unir objetos

const productoCompleto={...producto, ...medidas}
console.log(productoCompleto)