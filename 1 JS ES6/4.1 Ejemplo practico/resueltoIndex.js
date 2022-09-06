// Arreglo con la información que utilizaremos
const data = [
    {
        "item_id": 5003965,
        "item_name": "Bearded Dragon",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/254002-Center-1",
        "type": 1
    },
    {
        "item_id": 5003961,
        "item_name": "Ball Python",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2662964-Center-3",
        "type": 1
    },
    {
        "item_id": 5004154,
        "item_name": "Crested Gecko",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/542920-right-1",
        "type": 1
    },
    {
        "item_id": 5004153,
        "item_name": "Corn Snake",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/151033-Center-1",
        "type": 1
    },
    {
        "item_id": 5004760,
        "item_name": "Leopard Gecko",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/110981-Center-1",
        "type": 1
    },
    {
        "item_id": 5005420,
        "item_name": "Red Ear Slider",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/983039-center-1",
        "type": 1
    },
    {
        "item_id": 5005754,
        "item_name": "Veiled Chameleon",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/253537-Center-1",
        "type": 1
    },
    {
        "item_id": 5094369,
        "item_name": "Electric Blue Jack Dempsey",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271201-Center-1",
        "type": 2
    },
    {
        "item_id": 5094368,
        "item_name": "Flowerhorn Cichlid",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271199-right-1",
        "type": 2
    },
    {
        "item_id": 120882,
        "item_name": "Male Elephant Ear Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2137318-Center-1",
        "type": 2
    },
    {
        "item_id": 5000669,
        "item_name": "Male Halfmoon Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/1031740-Center-1",
        "type": 2
    },
    {
        "item_id": 5027310,
        "item_name": "Male Rose Petal Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2843992-right-1",
        "type": 2
    },
    {
        "item_id": 5040015,
        "item_name": "Shubunkin Goldfish",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3467415-center-1",
        "type": 2
    },
    {
        "item_id": 113333,
        "item_name": "Female Red Veiltail Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/1397621-right-1",
        "type": 2
    },
    {
        "item_id": 5004149,
        "item_name": "Cockatiel",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/832448-center-1",
        "type": 3
    },
    {
        "item_id": 5004015,
        "item_name": "Blue Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112160-left-2",
        "type": 3
    },
    {
        "item_id": 5004510,
        "item_name": "Green Cheek Conure",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/223972-Center-1",
        "type": 3
    },
    {
        "item_id": 5005418,
        "item_name": "Fancy Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112178-right-2",
        "type": 3
    },
    {
        "item_id": 5005689,
        "item_name": "Sun Conure",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112631-Center-1",
        "type": 3
    },
    {
        "item_id": 5004511,
        "item_name": "Green Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112151-center-1",
        "type": 3
    },
    {
        "item_id": 5006063,
        "item_name": "Zebra Finch",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112283-center-1",
        "type": 3
    },
    {
        "item_id": 5005623,
        "item_name": "Society Finch",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112291-center-1",
        "type": 3
    },
    {
        "item_id": 5005415,
        "item_name": "Quaker Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/180246-Center-1",
        "type": 3
    },
];
// "Enum" auxiliar para el tipo de mascotas
const petTypes = {
    reptil: 1,
    fish: 2,
    bird: 3
};
// Evalúa el tipo de mascota y devuelve el texto correspondiente
const getSpecie = (type) => {
    switch (type) {
        case petTypes.reptil:
            return "Reptil";
        case petTypes.fish:
            return "Fish";
        case petTypes.bird:
            return "Bird";
    }
}
window.onload = () => {
    // Arreglo que almacena las mascotas favoritas
    const favorites = [];

    //Elementos del dom
    const domElements = {
        searchInput: document.getElementById("txtPetName"),
        inFavorites: document.getElementById("checkboxFavorites"),
        petType: document.getElementById("selectPetType"),
        resultsContainer: document.getElementById("results"),
        petItemTemplate: document.getElementById("petItemTemplate")
    };

    // Filtra los datos, como son arreglos podemos usar el método filter, como vimos, recibe una función que usaremos
    // para evaluar el item en el arreglo, si la función regresa un valor verdadero, el item se agrega al array resultado
    // filter se usa cuando queremos obtener los elementos que coincidan con ciertos criterios, si queremos alterar el
    // elemento entonces debemos usar map, aunque map devuelve un arreglo del mismo tamaño que el original, por ejemplo
    // si quisiéramos agregar un campo en nuestros datos como isInFavorites necesitaremos a map
    // data = data.map(petItem => ({...petItem, isInFavorites:false}));
    // filter siempre devuelve el objeto original del array, map lo que le pongas en el return
    const filterData = (data) => data.filter((pet) => {
        let valid = true;
        // Si el filtro de tipo tiene valor, filtra por el
        if (valid && domElements.petType.value) {
            valid = +domElements.petType.value === pet.type;
        }
        // Si el filtro de texto tiene un valor, filtra por el
        if (valid && domElements.searchInput.value) {
            valid = pet.item_name.toLowerCase().includes(domElements.searchInput.value.toLowerCase());
        }
        return valid;
    });

    // Función que agrega o remueve un item de favoritos
    const handleFavoritesItemButton = (event) => {
        const id = +event.currentTarget.dataset.id;// Al poner un + convertimos el valor a entero :D de lo contrario
        // podemos usar parseInt(valor, base), ej: parseInt(event.currentTarget.dataset.id, 10)

        // Usamos el método findIndex de array, si no encuentra el item devuelve -1
        const favoritesIndex = favorites.findIndex(petItem => petItem.item_id === id);
        // Si encuentra el item entonces lo elimina
        if (favoritesIndex >= 0) {
            // slice remueve uno o más elementos del array
            // Como primer argumento recibe el índice, como segundo, el número de objetos afectados
            favorites.splice(favoritesIndex, 1);
            event.target.parentElement.parentElement.remove();
        } else {
            // Para agregar elementos a un arreglo usamos el método push, para buscar el elemento find que a diferencia
            // de findIndex no devuelve el índice, sino el elemento, si no lo encuentra devuelve null, en este caso
            // siempre existe
            favorites.push(data.find(petItem => petItem.item_id === id));
        }

    }
    const renderData = (data) => {
        domElements.resultsContainer.innerHTML = "";
        // forEach es un método de Array que itera sobre todos los elementos del arreglo, no devuelve nada y no puede
        // detenerse con break, su equivalente en for es "for(const item of array)"
        data.map((petItem) => {
            // Usamos clonamos el contenido de la plantilla, esto se puede hacer porque se utiliza un elemento Template
            // introducido en HTML5
            const templateClone = domElements.petItemTemplate.content.cloneNode(true);
            // En un elemento DOM podemos usar los selectores, no solo en document, aquí se usan para llenar la plantilla
            templateClone.querySelector("div").id = petItem.item_id;
            templateClone.querySelector("h3").innerHTML = petItem.item_name;
            templateClone.querySelector("p").innerHTML = getSpecie(petItem.type);
            templateClone.querySelector("img").src = petItem.image;
            templateClone.querySelector("button").dataset.id = petItem.item_id;
            // Aquí el selector se usa para asignar la acción al botón
            templateClone.querySelector("button").onclick = handleFavoritesItemButton;
            return templateClone;
        })// Aquí se vincula al div que contiene los elementos de las mascotas
            .forEach(templateItem => domElements.resultsContainer.append(templateItem));
    }
    // Esta función contiene los eventos que se vincularan a los controles de la página
    const triggers = () => {
        // Renderizamos los datos cada que el usuario escribe en el campo de búsqueda, si está marcada la casilla de
        // favoritos, busca en el, de lo contrario en el objeto global
        domElements.searchInput.onkeyup = () => renderData(
            filterData(domElements.inFavorites.checked ? favorites : data)
        );
        // Cambia la fuente de datos que se pinta cuando el usuario marca o desmarca los favoritos
        domElements.inFavorites.onchange = (event) => {
            if (event.target.checked) {
                renderData(filterData(favorites));
            } else {
                renderData(filterData(data));
            }
        };
        // Filtra cuando cambian el tipo de mascotas
        domElements.petType.onchange = () => renderData(
            filterData(domElements.inFavorites.checked ? favorites : data)
        );
    };
    // Esta función procesa de manera inicial vinculando los eventos a los controles y pintando por primera vez los datos.
    const init = () => {
        triggers();
        renderData(data);
    };
    init();


};