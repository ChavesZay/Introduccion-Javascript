//METODOS DE PROPIEDAD
const reproductor={
    reproducir: function(id){
        console.log(`Reproducir canción con el id: ${id}`)
    },
    pausa: function(){
        console.log('Pausando......')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion= function(id){
    console.log(`Eliminar la canción con el id: ${id}`)
}

reproductor.reproducir(3400)
reproductor.pausa();
reproductor.borrarCancion(200);
reproductor.crearPlaylist('Heavy Metal')
reproductor.reproducirPlaylist('Heavy Metal')