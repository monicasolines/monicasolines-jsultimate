const usuarios = [
    {id: 1, name: 'pepe'},
    {id: 1, name: 'felipe'},
    {id: 2, name: 'pedro'},
];

    //USAR INDEXOF no sirve para objetos porque son de refencia(osea guarda donde esta guardado no su objeto en si)
//    const resultado = usuarios.indexOf({id: 1, name: 'pepe'})
//devuelve el primero que encuentra con esa propiedad(por eso si hay mas con esa propiedad no sirve)
//usa propiedad UNICA.
    // const resultado = usuarios.find(function(usuario) {
    //     return usuario.id === 3;
    // });

    //ESTA ES LA MISMA DE ARRIBA PERO COMO ARROW FUNCTION
    const resultado = usuarios.find(usuario => usuario.id === 1);
   console.log(resultado);
   