//ARRAYS
const numeros=[1,2,3,4,5,6,7,8,9];
const meses =new Array('Enero','Abril', 'Mayo','Junio','Julio','Obtuble','Diciembre' ) //menos utilizado
const arreglo=['hola',1,2,true,{nombre:'Zaylin', email:'chaves@gmail.com'}, [1,2,3,4,5]]

console.log(numeros)
console.table(meses)
console.log(arreglo)

//Aceder a los valores del arreglo
console.log(arreglo[0])
console.log(arreglo[1])
console.log(arreglo[2])
console.log(arreglo[3])
console.log(arreglo[4])
console.log(arreglo[5])

//Longitud de un arrego
console.log(arreglo.length)

//Iterrador de arrays
meses.forEach(function(mes){
    console.log(mes)
})

//MODIFICAR EL ARREGLO ORIGINAL
//Agregar elementos al arreglo
numeros.push(60)//Agregar elementos al final del arreglo
numeros.push(70,80)
numeros.unshift(-10,-130) //Agregar elementos al inicio del arreglo
//Eliminar elementos de un arrelo
meses.pop(); //Elimina el ultimo elemento del arreglo
meses.shift(); //Elimina el primer elemento del arreglo
meses.splice(2, 1); //Elimina de una posisicion en especifico y la cantidad de elementos splice(posicion, cantidad de elementos)

//NO MODIFICAR EL ARREGLO ORIGINAL, utilizar el Rest Operator o Spread Operator
const nuevoMeses=[...meses, 'Noviembre'] //push
const nuevoMeses2=['Noviembre',...meses]// unshift

console.log(nuevoMeses)
console.log(meses)
console.log(numeros)
