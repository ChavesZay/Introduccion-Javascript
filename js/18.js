function sumar (num1=0, num2=0){ //num1 y 2 son parametros y por si no mandan parametros, su valor por defecto es 0
    return num1+num2
}

const resultado=sumar(10,5); //Argumentos o los valores reales
///console.log(resultado)

let total=0;

function agregarCarrito(precio){
    return total +=precio;
}
function calcularImpuestos(total){
    return 1.15*total
}
agregarCarrito(200);
agregarCarrito(300);
agregarCarrito(500);

console.log(total);

const totalPagar=calcularImpuestos(total)
console.log(`El total a pagar con impuestos es de: $${totalPagar}`)