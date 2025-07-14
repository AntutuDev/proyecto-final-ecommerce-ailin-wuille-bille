
const irarriba = document.getElementById("irarriba"); // reemplaza ir arriba con la seccion #
irarriba.addEventListener('click',goUp);

window.addEventListener('scroll',() => { // cuando se desplaza más de 300 px en vertical, el boton se hace visible
    if(window.scrollY > 400){
        irarriba.style.display = "block"; // aparece la manito
    }
    else{
        irarriba.style.display = "none"; // desaparece la manito
    }
});

function goUp(){ // funcion que scrollea suave al top de la pagina
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

const grilla = document.getElementById("grilla"); // se declara el contenedor de productos de la tienda

function cargarProductosTienda(digitales){ // carga de productos del array de digitales
    digitales.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "item";
        nuevoProducto.innerHTML = `
        <img src = "${producto.img}" width="60%">
        <p>${producto.nombre}<br>$${producto.precio}</p>
        <button type="button">AGREGAR</button>
        `
        grilla.appendChild(nuevoProducto);
        const oldText = nuevoProducto.getElementsByTagName("button")[0].textContent; // cambia el boton al hacer click
        const newText = "AGREGADO! ♥";
        const changeTime = 1000; // transicion 1 seg
        nuevoProducto.getElementsByTagName("button")[0].addEventListener('click', function(){
            agregarAlCarrito(producto);
            nuevoProducto.getElementsByTagName("button")[0].textContent = newText;
            setTimeout(function(){
                nuevoProducto.getElementsByTagName("button")[0].textContent = oldText;
            },changeTime);
        } );
    });
}

cargarProductosTienda(digitales); // llama a la funcion agregar productos

