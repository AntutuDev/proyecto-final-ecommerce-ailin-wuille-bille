const cuentaCarrito = document.getElementById("cuenta-carrito");

refreshCuentaCarrito();

function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("digitales")); // parsea el string en un objeto
    let cuenta = 0;
    if(!memoria || memoria.length === 0){ // si no existe el producto en memoria, lo crea
        const nuevoProducto = getNuevoProdMemoria(producto);
        localStorage.setItem("digitales", JSON.stringify([nuevoProducto])); // convierte el objeto en un string
        cuenta = 1;
    }
    else{
        const indexProducto = memoria.findIndex(digital => digital.id === producto.id); // busca si está
        const nuevaMemoria = memoria;
        if(indexProducto === -1){ //si no lo encuentra
            nuevaMemoria.push(getNuevoProdMemoria(producto));
            cuenta = 1;           
        } 
        else { // si lo encuentra le suma
            nuevaMemoria[indexProducto].cantidad ++;
            cuenta = nuevaMemoria[indexProducto].cantidad;
        }
        localStorage.setItem("digitales", JSON.stringify(nuevaMemoria));        
    }
    refreshCuentaCarrito();
    return cuenta;
}

function quitarDelCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("digitales")); // parsea el string en un objeto
    let cuenta = 0;
    const indexProducto = memoria.findIndex(digital => digital.id === producto.id); // busca si está
    const nuevaMemoria = memoria; 
    if(nuevaMemoria[indexProducto].cantidad === 1){ // si hay un solo elemento, lo quita de la lista
        nuevaMemoria.splice(indexProducto, 1); // elimina el elemento segun el id
    }
    else{
        nuevaMemoria[indexProducto].cantidad --; // si hay mas de uno, resta 1
        cuenta = nuevaMemoria[indexProducto].cantidad;
    }
    localStorage.setItem("digitales", JSON.stringify(memoria));
    refreshCuentaCarrito();
    return cuenta;
}

function getNuevoProdMemoria(producto){ // toma un producto, le agrega 1 y lo devuelve
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

function refreshCuentaCarrito(){ // cuenta los productos en memoria
    const memoria = JSON.parse(localStorage.getItem("digitales"));
    if(memoria && memoria.length > 0){
       const cuenta = memoria.reduce((acumulado, actual) => acumulado + actual.cantidad, 0); // reduce un array a un solo valor
       return cuentaCarrito.innerText = cuenta; 
    }
    else{
       cuentaCarrito.innerText = 0; 
    }       
}

const grillaCart = document.getElementById("grillacart"); // se declara el contenedor de productos del carrito
const contUnidades = document.getElementById("cantidad");
const contPrecio = document.getElementById("precio");
const mensajeVacio = document.getElementById("vacio");
const conTotales = document.getElementById("totales");
const resetCart = document.getElementById("resetCart");



function cargarProductosCarrito(){ // carga de productos agregados al carrito
    grillaCart.innerHTML = "";
    const digitales = JSON.parse(localStorage.getItem("digitales"));
    if(digitales && digitales.length > 0){
       digitales.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "item-carrito";
        nuevoProducto.innerHTML = `
        <img src = "${producto.img}" width="10%">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <div>
            <button>-</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button>+</button>
        </div>
        `;
        grillaCart.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[1].addEventListener('click', (e) => {
            cantidad = e.target.parentElement.getElementsByClassName("cantidad")[0];
            cantidad.innerText = agregarAlCarrito(producto);
            refreshTotales();
            });
        nuevoProducto.getElementsByTagName("button")[0].addEventListener('click', (e) => {
            cantidad = e.target.parentElement.getElementsByClassName("cantidad")[0];
            cantidad.innerText = quitarDelCarrito(producto);
            cargarProductosCarrito();
            refreshTotales();
            });
        }); 
    }

    checkVacio(); // verifica si el carrito esta vacio para mostrar mensaje
    refreshTotales(); // actualiza totales
    refreshCuentaCarrito(); // actualiza el contador del carrito
}

cargarProductosCarrito(); // llama a la funcion mostrar items del carrito

function refreshTotales(){
    const digitales = JSON.parse(localStorage.getItem("digitales"));
    let cantidad = 0;
    let precio = 0;
    if(digitales && digitales.length > 0){
        digitales.forEach(producto => {
            cantidad += producto.cantidad; 
            precio += producto.precio * producto.cantidad;  
        });
    }
        contUnidades.innerText = cantidad;
        contPrecio.innerText = precio;
    if(precio === 0){
       checkVacio();
       resetCarrito(); 
    }   
}

resetCart.addEventListener('click', () =>{
    grillaCart.innerHTML = "";
    resetCarrito();
    checkVacio();
});

function checkVacio(){
    const digitales = JSON.parse(localStorage.getItem("digitales"));
    mensajeVacio.classList.toggle("oculto", digitales);
    conTotales.classList.toggle("oculto", !digitales);
}

function resetCarrito(){ // setea todo en cero y borra el localstorage
    localStorage.removeItem("digitales");
    refreshCuentaCarrito();
    refreshTotales();
    cargarProductosCarrito();
}


