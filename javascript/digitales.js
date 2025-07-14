const digitales = [ //array de productos de la tienda
    {
        id: 1,
        nombre: "Wallpaper Sandía",
        img: "./imagenes/wall1.png",
        precio: 2000, 
    },
    {
        id: 2,
        nombre: "Wallpaper Cerezas",
        img: "./imagenes/wall2.png",
        precio: 2000, 
    },
    {
        id: 3,
        nombre: "Wallpaper Flores Rosa",
        img: "./imagenes/wall3.png",
        precio: 2000, 
    },
    {
        id: 4,
        nombre: "Wallpaper Flores Celeste",
        img: "./imagenes/wall4.png",
        precio: 2000, 
    },
    {
        id: 5,
        nombre: "Fuente estilo graffiti",
        img: "./imagenes/graffitti-font.png",
        precio: 2500, 
    },
    {
        id: 6,
        nombre: "Pack de cursores Patita",
        img: "./imagenes/pawcursors.png",
        precio: 5000, 
    }
]

const comisiones = [
    {
        id: 1,
        nombre: "CHIBI",
        img: "./imagenes/chibi.png",
        texto: "<ul><li>Ilustración en alta resolución estilo chibi (.PNG 300dpi).</li><li>Fondo: color sólido, textura, degradado, estampado, geométrico o patrón simple.</li><li>Tiempo estimado de entrega: 2-3 días.</li></ul>",
        descripcion: "<ul><li>Delineado simple o boceto / B&N: $5000.</li><li>Delineado simple / Colores planos / Render medio: $8000.</li><li>Delineado simple o lineless / Full color / Full Render: $10000.</li><li>Personaje extra: +$5000 / + 1 día.</li><li>Fondo personalizado: +$2000 / + 1 día.</li></ul>",
    },
    {
        id: 2,
        nombre: "BUSTO",
        img: "./imagenes/bust.png",
        texto: "<ul><li>Ilustración en alta resolución altura busto (.PNG 300dpi).</li><li>Fondo: color sólido, textura, degradado, estampado, geométrico o patrón simple.</li><li>Tiempo estimado de entrega: 2-3 días.</li></ul>",
        descripcion: "<ul><li>Delineado simple o boceto / B&N: $6000.</li><li>Delineado simple / Colores planos / Render medio: $9000.</li><li>Delineado simple o lineless / Full color / Full Render: $12000.</li><li>Personaje extra: +$5000 / + 1 día.</li><li>Fondo personalizado: +$2000 / + 1 día.</li></ul>",
    },
    {
        id: 3,
        nombre: "MEDIO CUERPO",
        img: "./imagenes/halfbody.png",
        texto: "<ul><li>Ilustración en alta resolución altura cintura / cadera (.PNG 300dpi).</li><li>Fondo: color sólido, textura, degradado, estampado, geométrico o patrón simple.</li><li>Tiempo estimado de entrega: 3-5 días.</li></ul>",
        descripcion: "<ul><li>Delineado simple o boceto / B&N: $8000.</li><li>Delineado simple / Colores planos / Render medio: $12000.</li><li>Delineado simple o lineless / Full color / Full Render: $15000.</li><li>Personaje extra: +$8000 / + 2 días.</li><li>Fondo personalizado: +$3000 / + 1 día.</li></ul>",
    },
    {
        id: 4,
        nombre: "CUERPO ENTERO",
        img: "./imagenes/fullbody.png",
        texto: "<ul><li>Ilustración en alta resolución de cuerpo completo (.PNG 300dpi).</li><li>Fondo: color sólido, textura, degradado, estampado, geométrico o patrón simple.</li><li>Tiempo estimado de entrega: 5-7 días.</li></ul>",
        descripcion: "<ul><li>Delineado simple o boceto / B&N: $8000.</li><li>Delineado simple / Colores planos / Render medio: $14000.</li><li>Delineado simple o lineless / Full color / Full Render: $18000.</li><li>Personaje extra: +$9000 / + 2 días.</li><li>Fondo personalizado: +$4000 / + 2 días.</li></ul>",
    },
    {
        id: 5,
        nombre: "+18 / NSFW",
        img: "./imagenes/18.png",
        texto: "<ul><li>Ilustración en alta resolución +18 NSFW (.PNG 300dpi).</li><li>Fondo: color sólido, textura, degradado, estampado, geométrico o patrón simple.</li><li>Tiempo estimado de entrega: 5-10 días.</li></ul>",
        descripcion: "<ul><li>Delineado simple o boceto / B&N: $12000.</li><li>Delineado simple / Colores planos / Render medio: $18000.</li><li>Delineado simple o lineless / Full color / Full Render: $25000.</li><li>Personaje extra: +$12000 / + 3 días.</li><li>Fondo personalizado: +$7000 / + 2 días.</li></ul>",
    },
    {
        id: 6,
        nombre: "HOJA DE REFERENCIA",
        img: "./imagenes/refsheet2.png",
        texto: "<ul><li>Ilustración en alta resolución de hoja de personaje (.PNG 300dpi).</li><li>Fondo: color sólido, degradado, geométrico o patrón simple.</li><li>Paleta de colores y detalles básicos.</li><li>Tiempo estimado de entrega: 8-10 días.</li></ul>",
        descripcion: "<ul><li>Vista frente y espalda: $20000.</li><li>Vista frente y espalda con outfit adicional: $25000.</li><li>Vista frente y espalda con expresión facial: $28000.</li><li>Vista adicional: +$13000 / + 1 día.</li><li>Outfit, detalles o expresión facial adicional: $5000.</li></ul>",
    },
    {
        id: 7,
        nombre: "PERSONALIZADOS",
        img: "./imagenes/resources.png",
        texto: "<ul><li>Ilustración en alta resolución de asset personalizado (.PNG 300dpi).</li><li>Tiempo estimado de entrega: 3-6 días.</li></ul>",
        descripcion: "<ul><li>Pack emotes Twitch: $5000.</li><li>Pack badges Twitch: $8000.</li><li>Pack paneles Twitch: $10000.</li><li>Sticker Telegram: $2500.</li><li>Archivo de fuente: $3000.</li><li>Banner: $5000.</li><li>PNG Tuber con 3 expresiones: $20000.</li></ul>",
    }
]

const reviews = [
    {
        id: 1,
        img: "./imagenes/rev1.png",
        texto:"\"Quería una versión furry de Ahri K-DA y el resultado es hermoso. 100% recomendada.\"<br>- KennedyBunny en Discord",
    },
    {
        id: 2,
        img: "./imagenes/rev2.png",
        texto:"\"Solicité un retrato de mi oso polar Jeff y me encantó el resultado. Definitivamente recomiendo a la artista.\"<br>- SaltyKommander en Discord",
    },
    {
        id: 3,
        img: "./imagenes/rev3.png",
        texto:"\"Buscaba nuevo arte de mi personaje Foxy y ella pudo retratar perfectamente lo que buscaba.\"<br>- FoxxyGirl943 en Discord",
    },
    {
        id: 4,
        img: "./imagenes/rev4.png",
        texto:"\"Solicité una caricatura estilo Simpsoniana de mi foto y amé el resultado. Súper recomendada.\"<br>- Verónica Ríos",
    },
    {
        id: 5,
        img: "./imagenes/rev5.png",
        texto:"\"Necesitaba más arte de mi dragón Darius. Quedó mejor de lo que esperaba.\"<br>- EmeTraceShade en DeviantArt",
    },
    {
        id: 6,
        img: "./imagenes/rev6.png",
        texto:"\"Solicité un retrato de mi trainer con su Gardevoir Shiny y estoy fascinada con el resultado.\"<br>- Shelby Simmons",
    },
    {
        id: 7,
        img: "./imagenes/rev7.png",
        texto:"\"Amo los kobolds y estaba buscando algún artista que pudiera ampliar mi colección. El trabajo que hizo es hermoso\"<br>- SerbalSergal en Itaku",
    },
]