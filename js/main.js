/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img')
/* Acceder al elemento del DOM para crear los artículos de viajes */
const elementosDestinos = document.querySelector('#recomendados>.flexContainer');
// Crear fragmento para destinos
const fragmentoDestinos = document.createDocumentFragment();
/* Acceder al elemento del DOM para crear añadir los options */
const elementosDestinosOptions = document.querySelector('#destinos div select');
const fragmentoOptions = document.createDocumentFragment();
// Los arrays deberían estar metidos en cada función para reducir el espacio (alcance global vs. alcance local / función)

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Imagen de una puesta de sol en el mar',
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Imagen de globos aeroestáticos navegando por un cielo nublado'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Imagen de un cielo nublado al atardecer',
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Fotografía de un campo de trigo con globos aeroestáticos volando',
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Fotografía de un cielo nublado con luna llena',
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Iamgen de unos picos montañosos nevados',
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Imagen de una bandada de pájaros volando al atardecer',
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Imagen de una planta en blanco y negro',
    },
]

const arrayRecomendados = [
    {
        id: 1,
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'Chica tumbada en una hamaca a la orilla del mar',
        h3: 'Viaje a Costa Rica',
        p: 'Ejemplo de viaje a Costa Rica, lugar paradisíaco: playas, sol...',
    },
    {
        id: 2,
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'Fotografía de un bungalo en el mar',
        h3: 'Viaje a las Maldivas',
        p: 'Ejemplo de viaje a Maldivas: playas, sol...',
    },
    {
        id: 3,
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'Fotografía de un cartel de señales',
        h3: 'Viaje a Puerto Rico',
        p: 'Ejemplo de viaje a Puerto Rico. El paraísco de América...',
    },
    {
        id: 4,
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'Imagen de la plaza de España de Sevilla',
        h3: 'Viaje a Sevilla',
        p: 'Ejemplo de viaje a Sevilla, conoce una de las ciudades más emblemáticas de España. Disfruta de su gastronomía, cultura y gente en el sur de Andalucía...',
    },
    {
        id: 5,
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'Fotografía de la plaza España de Sevilla',
        h3: 'Viaje a Sevilla 2.0',
        p: 'Segundo viaje a Sevilla. Sigue disfrutando de esta maravillosa ciudad',
    },
    {
        id: 6,
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'Fotografía de un paseo marítimo junto al mar',
        h3: 'Viaje a San Sebastián',
        p: 'Ejemplo de viaje a San Sebastián. Ciudad monumental con su gastronomía y cultura...'
    },
    {
        id: 7,
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'Fotografía de un castillo fortificado',
        h3: 'Viaje a Toledo',
        p: 'Ejemplo de viaje a Toledo. Descubre esta maravillosa ciudad...'
    },
]

const arrayDestinos = [
    {
        id: 1,
        value: 'Burgos',
    },
    {
        id: 2,
        value: 'Valladolid',
    },
    {
        id: 3,
        value: 'Carabanchel',
    },
    {
        id: 4,
        value: 'Vitoria-Gasteiz',
    },
]


/* EVENTOS */

/* FUNCIONES */
// Función para elegir un nº aleatorio para el banner
const aleatorio = () => {
    const indice = Math.floor(Math.random() * arrayBanners.length);
    return indice;
};

const pintarBanner = () => {
    const indice = aleatorio();
    const elemento = arrayBanners[indice];

    imagenBanner.setAttribute('src', elemento.src);
    imagenBanner.setAttribute('alt', elemento.alt);
}

const pintarCards = () => {
    arrayRecomendados.forEach((elemento) => {
        const articleCards = document.createElement('ARTICLE');

        const divCards = document.createElement('DIV');

        const imgCards = document.createElement('IMG');
        imgCards.src = elemento.src;
        imgCards.alt = elemento.alt;

        const h3Cards = document.createElement('H3');
        h3Cards.append(elemento.h3);
        const pCards = document.createElement('P');
        pCards.append(elemento.p);

        divCards.append(imgCards);
        articleCards.append(divCards);
        articleCards.append(h3Cards);
        articleCards.append(pCards);

        fragmentoOptions.append(articleCards);
    });

    elementosDestinos.append(fragmentoOptions);
    /* recorrer los elementos del array/*
    /* por cada elemento crear:/*
)    /* un article   */
    /* un div   */
    /* una imgen asignando sus atributos   */
    /* un h3 asignar su valor   */
    /* un p asignar su valor   */

    /* meter la imagen en el div */
    /* meter el div en el artigle */
    /* meter el h3 y el p en el article */

    /* añadir el artícle fragmento */
    /* dejo de recorrer el array */

    /* añadir el fragmento al div flexContainer */

}

const pintarDestinos = () => {
    arrayDestinos.forEach((elemento) => {
        const optionOptions = document.createElement('OPTION');
        optionOptions.value = elemento.value;

        optionOptions.textContent = elemento.value;
        console.log(optionOptions)

        elementosDestinosOptions.append(optionOptions);
    });
    console.log(fragmentoOptions);
    elementosDestinosOptions.append(fragmentoOptions);


    /* Recorrer los elementos del array
    Por cada elemento crear:
    un option
    asignar el valor del atributo value

    añadir el option dentro de la etiqueta select

    añadir el option dentro del section

    dejar de recorrer el array

    añadir el section dentro del fragmento
    */
};



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner();
pintarCards();
pintarDestinos();