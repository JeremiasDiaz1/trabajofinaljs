console.log('hola mundo');


class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);

    }
}


// Agregar cosas al carrito

function solicitarProducto () {
    
    let entrada = prompt ('Ingrese el producto que desea fideo, arroz, gaseosa')
    agregarCarrito (entrada)
   
    
}
let productoEnCarro = []
console.log(localstorage.getitem(productoEnCarro))

function agregarCarrito() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let elemento = new producto()
    elemento.nombre = nombre 
    elemento.precio = precio
    localStorage.setItem('productoEnCarro', JSON.stringify('productoEnCarro'))
    
    productoEnCarro.push (elemento)
    console.log( 'selecciono ' , elemento)
    console.log(productoEnCarro);
    

}


// carrito 

function carrito() {
    const container = document.getElementById('carro')
    for (const producto of producto) {
        
        const item = document.createElement('li')
        item.className = "list-group"
        item.textContent = producto
        inputRef.value = producto
        container.appendChild(item)
    }
    
}


//  vaciar carrito

function vaciarCarrito() {
    
    carrito = [];
    
    renderizarCarrito();
}












