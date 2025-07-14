
const ordenvacia = document.getElementById("ordenVacia");
const resumencompra = document.getElementById("resumenCompra");

ordenVacia();

function ordenVacia(){ // si la orden esta vacia, oculta los botones y el formulario
    const digitales = JSON.parse(localStorage.getItem("digitales"));
    ordenvacia.classList.toggle("oculto", digitales);
    resumencompra.classList.toggle("oculto", !digitales);
}

cargarOrden();

function cargarOrden(){ // muestra los items y los subtotales de la compra
    const ordencompra = document.getElementById("ordendecompra");
    const digitales = JSON.parse(localStorage.getItem('digitales'));

    let tot = 0;
    let resumenLista = "";

    digitales.forEach(producto => {
        resumenLista += `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}<br>`
        tot += producto.precio * producto.cantidad;
    });

    resumenLista += `<br><strong>Total a abonar: $${tot}</strong>`;

    ordencompra.innerHTML = resumenLista;
}

const botonComprar = document.getElementById("botoncompra");
botonComprar.addEventListener('click', function(){
    prepararFormulario();
    localStorage.removeItem("digitales");    
});

function prepararFormulario(){

    const contactName = document.getElementById("name").value;
    const emailContact = document.getElementById("emailcontacto").value;
    const telephone = document.getElementById("telefono").value;

    let listaDeItems = "";
    let totales = 0;
    const digitales = JSON.parse(localStorage.getItem("digitales"));

    digitales.forEach(producto => { // carga los items y el total como strings en textareas invisibles
        listaDeItems += `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}\n`
        totales += producto.precio * producto.cantidad;
    });
    
    document.getElementById("listaItems").value = listaDeItems;
    document.getElementById("montos").value = totales;


    //document.getElementById("carrito").submit(); 
}
 

        
    