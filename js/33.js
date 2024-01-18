async function obtenerEmpleados(){
    const url='empleados.json'
    // fetch (url)
    // .then(resultado => {
    //     return resultado.json();
    // })
    // .then (datos=>{
    //    // console.log(datos.empleados)
    //    const {empleados}=datos;      
    //    console.log(empleados)

    // });

    const resultado= await fetch(url);
    const datos= await resultado.json();
    console.log(datos);

}

obtenerEmpleados();