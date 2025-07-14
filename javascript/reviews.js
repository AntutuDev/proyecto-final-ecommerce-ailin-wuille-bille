const grillareviews = document.getElementById("grillareviews"); // se declara el contenedor de reviews

function cargarReviews(reviews){ // carga de items del array de reviews
    reviews.forEach(revi => {
        const nuevaRevi = document.createElement("div");
        nuevaRevi.classList = "categoria";
       
        const nuevaInfo1 = document.createElement("div");
        nuevaInfo1.classList = "info";
        nuevaInfo1.innerHTML = `<img src = "${revi.img}">`;
        nuevaInfo1.addEventListener('click', ()=>{ // click en la imagen, triggea mostrarGrande con la ruta de la imagen
            const ruta = `<img src = "${revi.img}">`;
            mostrarGrande(ruta);
        });
        
        const nuevaInfo2 = document.createElement("div");
        nuevaInfo2.classList = "info";
        nuevaInfo2.innerHTML = `<p>${revi.texto}</p>`;

        if(revi.id%2 === 0){ // si es par, va primero texto y luego imagen
           nuevaRevi.appendChild(nuevaInfo2); //sub div texto
           nuevaRevi.appendChild(nuevaInfo1); //sub div imagen             
        }
        else{ // si es impar, va primero imagen y luego texto
            nuevaRevi.appendChild(nuevaInfo1); //sub div imagen
            nuevaRevi.appendChild(nuevaInfo2); //sub div texto
        }
                
        grillareviews.appendChild(nuevaRevi);
 
    });
}

cargarReviews(reviews); // llama a la funcion agregar reviews

function mostrarGrande(ruta){
    const fondo = document.getElementById("popupFondo"); // el fondo blurreado
    const cruz = document.getElementsByClassName("cerrar")[0]; // la cruz de cierre del popup
    fondo.style.display = "block";
    const imagenPop = document.getElementById("pics"); // obtiene la ubicacion del <p>
    
    imagenPop.innerHTML = ruta;
    cruz.addEventListener('click', function(){
        fondo.style.display = "none"; // cierra si clickea en la cruz
    })
    
    window.addEventListener('click', function(e){
        if(e.target == fondo){ // cierra si clickea en cualquier parte del popup blurreado
            fondo.style.display = "none";
        }
    })
}


