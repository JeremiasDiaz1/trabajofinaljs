console.log('hola mundo');


class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);

    }
}




function solicitarProducto () {
    
    let entrada = prompt ('Ingrese el producto que desea fideo, arroz, gaseosa')
    agregarCarrito (entrada)
   
    
}
let productoEnCarro = []

function agregarCarrito () {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let elemento = new producto()
    elemento.nombre = nombre 
    elemento.precio = precio

    
    productoEnCarro.push (elemento)
    console.log( 'selecciono ' , elemento)
    console.log(productoEnCarro);
}

    

//solicitarProducto ();

    

