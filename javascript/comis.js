const grillacomis = document.getElementById("grillacomis"); // se declara el contenedor de comisiones

function cargarComisiones(comisiones){ // carga de items del array de comisiones
    comisiones.forEach(comi => {
        const nuevaComi = document.createElement("div");
        nuevaComi.classList = "categoria";
       
        const nuevaInfo1 = document.createElement("div");
        nuevaInfo1.classList = "info";
        nuevaInfo1.innerHTML = `<img src = "${comi.img}">`;            
        nuevaInfo1.addEventListener('click', function(){
            const path = `<img src = "${comi.img}">`;
            mostrarGrande(path);
        });
        
        const nuevaInfo2 = document.createElement("div");
        nuevaInfo2.classList = "info";
        nuevaInfo2.innerHTML = `
        <h4>${comi.nombre}</h4>
        <p>${comi.texto}</p>
        <button type = "button">+ INFO</button>
        `;
        if(comi.id%2 === 0){ // si es par, va primero texto y luego imagen
           nuevaComi.appendChild(nuevaInfo2); //sub div texto
           nuevaComi.appendChild(nuevaInfo1); //sub div imagen             
        }
        else{ // si es impar, va primero imagen y luego texto
            nuevaComi.appendChild(nuevaInfo1); //sub div imagen
            nuevaComi.appendChild(nuevaInfo2); //sub div texto
        }
                
        grillacomis.appendChild(nuevaComi);
        
        nuevaComi.getElementsByTagName("button")[0].addEventListener('click', function(){
            mostrarMasInfo(comi); // le pasa el objeto entero del popup
        } );
    });
}

cargarComisiones(comisiones); // llama a la funcion agregar comisiones

function mostrarMasInfo(com){
    const fondo = document.getElementById("popupFondo"); // el fondo blurreado
    const cruz = document.getElementsByClassName("cerrar")[0]; // la cruz de cierre del popup
    fondo.style.display = "block";
    const imagenPop = document.getElementById("pic"); // obtiene la ubicacion del <p>
    imagenPop.innerHTML = `<img src = "${com.img}">`;
    const textoPop = document.getElementById("data");
    textoPop.innerHTML = `
    <h4>${com.nombre}</h4>
    <p>${com.descripcion}</p>
    `;    
    cruz.addEventListener('click', function(){
        fondo.style.display = "none"; // cierra si clickea en la cruz
    })
    
    window.addEventListener('click', function(e){
        if(e.target == fondo){ // cierra si clickea en cualquier parte del popup blurreado
            fondo.style.display = "none";
        }
    })
}

function mostrarGrande(path){
    const bg = document.getElementById("popupBg"); // el fondo blurreado
    const cross = document.getElementsByClassName("salir")[0]; // la cruz de cierre del popup
    bg.style.display = "block";
    const imagenComi = document.getElementById("imagenComi"); // obtiene la ubicacion del <p>
    
    imagenComi.innerHTML = path;
    cross.addEventListener('click', function(){
        bg.style.display = "none"; // cierra si clickea en la cruz
    })
    
    window.addEventListener('click', function(e){
        if(e.target == bg){ // cierra si clickea en cualquier parte del popup blurreado
            bg.style.display = "none";
        }
    })
}