//For Loop

// for(let i=0;i<=10;i++){
// console.log(i)
// }

for(let i=0;i<=10;i++){
    if(i%2===0){  
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)

    }
}

const carrito=[
    {nombre:'Leche', precio:500},
    {nombre:'Confites', precio:700},
    {nombre:'Helado', precio:600},
    {nombre:'Chocolate', precio:900},
 ];

 for(let i=0;i<carrito.length;i++){
    console.log(carrito[i])
 }


//While Loop

let i =0;
while(i<10){
    if(i%2===0){  
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)

    }
    i++;
}
let index =0;
while(index<carrito.length){
    console.log(carrito[index])
    index++;
}

//Do While Loop
let e=100;
do{
console.log(i);
e++;
}while(e<10)



