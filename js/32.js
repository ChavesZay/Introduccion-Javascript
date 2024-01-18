// Async / await


function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Descargando clientes----Espere');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
                }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando pedidios----Espere');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
                }, 3000);
    });
}

async function app(){
    try {
        // const clientes= await descargarNuevosClientes(); //await espera hasta que esta linea se ejecute
        // const pedidos=await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)
        const resultado= await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]) //Se ejecutan las dos funciones al mismo tiempo
        console.log(resultado[0])
        console.log(resultado[1])

    } catch (error) {
        console.log(error)
    }
}
app();

