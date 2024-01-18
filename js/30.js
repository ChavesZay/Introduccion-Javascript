const usuarioAutenticado= new Promise ((resolve, reject)=>{
    const auth=false
    if(auth){
        resolve('Usario autenticado'); //Si la promise se cumple automaticamente se ejecuta el resolve
    }else{
        reject('Usario no autentiicado'); //si no se cumple se ejecuta el reject
    }
})

usuarioAutenticado
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})
//En los promises existen 3 valores:
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio la promise
//Rejected: Se ha rechazado o no se cumplio la promise