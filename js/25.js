// This
//This hace referencia a cada uno de los  objetos

//Sin this
// const reservation={
//     nombre:'Juan',
//     apellido: 'De la Torre',
//     total: 5000,
//     pagado:false,
//     informacion: function(){
//         console.log(`El cliente ${reservation.nombre} reservó y su cantidad a pagar es de ${reservation.total}`)
//     }
// }

//Con this
const reservation={
    nombre:'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}
reservation.informacion();