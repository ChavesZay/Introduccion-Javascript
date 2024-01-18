const boton= document.querySelector('#boton');

boton.addEventListener('click',()=>{
    Notification.requestPermission()
    .then(resultado=>{
        console.log(`Resultado: ${resultado}`)
    })
})

if(Notification.permission=='granted'){
    console.log('hjhj')
    new Notification('Esta es una noticicación',{ 
        icon:'img/check.png',
        body:'Código con Zaylin, los mejores tutoriales'
    })
}