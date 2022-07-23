// Esta es una API REST que nos permite obtener información sobre diferentes pokémon puedes ver la estructura de la información
// en https://pokeapi.co/, de esta forma nuestra app de frontend se comunicará con un backend
const pokeApiUrl = "https://pokeapi.co/api/v2/";
const pokedex = () => {
    // Estes es un objeto auxiliar que nos permite acceder a los campos destinados a mostrar las
    // estadísticas del pokemon a buscar, como puedes ver, es haciendo uso de la API de DOM que vimos anteriormente
    const pokemonStatsElements = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed"),
    };
    // Este es una referencia auxiliar que nos permitirá utilizar las clases que están en el archivo de CSS de acuerdo al tipo de pokemon
    let currentClassType = null;
    // Este es una simple cadena que nos ayudará a crear una imagen
    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>";
    // Este objeto simplemente guarda las rutas de imágenes de apoyo que se utilizaran cuando esperemos el resultado de la búsqueda
    // o cuando no se encuentre el pokemon solicitado
    const images = {
        imgPokemonNotFound: "./img/404.png",
        imgLoading: "./img/loading.gif",
    };
    // Este objeto contiene las referencias de los elementos que desplegarán la información del pokémon
    const containers = {
        imageContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemonTypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMovesElement: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId")
    };
    // Este objeto contiene las referencias de los botones
    const buttons = {
        all: Array.from(document.getElementsByClassName("btn")),
        search: document.getElementById("btnSearch"),
        next: document.getElementById("btnUp"),
        previous: document.getElementById("btnDown")
    };
    // Esta es la referencia al campo de texto que usa el usuario para escribir el nombre
    const pokemonInput = document.getElementById("pokemonName");
    // La agrupación de los elementos en objetos simplemente da una mejor estructura al código, de igual manera, es conveniente
    // separar los segmentos del código en funciones más pequeñas, de esta manera no solo se tiene un mejor orden, sino que
    // nos ahorrará problemas a la hora de depurar posibles errores en el código pues será más fácil determinar que es lo que
    // no está funcionando adecuadamente.

    // Esta función muestra el tipo de pokemon, recibe el resultado de la búsqueda de la API
    const processPokemonTypes = (pokemonData) => {
        let pokemonType = "";
        // Utilizo la primera clase para dar el color a los contenedores de movimientos y habilidades
        const firstClass = pokemonData.types[0].type.name;

        // ¿De dónde sale types, como sé es un arreglo? En la página de pokeapi(https://pokeapi.co/) puedes ver un ejemplo
        // del objeto que responde, pokemonData es ese objeto
        pokemonData.types.forEach((pokemonTypeData) => {
            // Se crea una etiqueta de clases por cada elemento type del arreglo
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
        });
        // Se quita la clase previa del contenedor de habilidades y movimientos si hay una
        if (currentClassType) {
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        // Se agrega la clase del tipo del contenedor de habilidades y movimientos
        containers.pokemonMovesElement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);
        currentClassType = firstClass;
        // Se agregan las etiquetas creadas previamente en nuestro forEach
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    };
    const processPokemonStats = (pokemonData) => {
        pokemonData.stats?.forEach((pokemonStatData) => {
            switch (pokemonStatData.stat.name) {
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
                    break;
            }
        });
    };
    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMove) => {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
        });
        containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
    };
    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";
        pokemonData.abilities?.forEach((pokemonAbility) => {
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
        });
        containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    };
    const setLoading = () => {
        containers.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
        buttons.all.forEach(button => button.disabled = true);
    };
    const setLoadingComplete = () => {
        buttons.all.forEach(button => checkDisabled(button));
    };
    const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/${pokemonName}`)
        .then((res) => res.json())
        .catch((error) => ({requestFailed: true}));
    const checkDisabled = (button) => {
        button.disabled = button.id === "btnDown" && containers.pokemonIdElement.value <= 1;
    };
    const setPokemonData = async (pokemonName) => {
        if (pokemonName) {
            setLoading();
            const pokemonData = await getPokemonData(typeof pokemonName === typeof "" ? pokemonName.toLowerCase() : pokemonName);
            if (pokemonData.requestFailed) {
                containers.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound);
            } else {
                containers.imageContainer.innerHTML = `
      
      
        ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_default)}
      
      
        ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}
      
      `;
                containers.pokemonNameElement.innerHTML = pokemonData.name;
                containers.pokemonIdElement.value = pokemonData.id;
                processPokemonTypes(pokemonData);
                processPokemonStats(pokemonData);
                processPokemonAbilities(pokemonData);
                processPokemonMoves(pokemonData);
            }
            setLoadingComplete();
        } else {
            // Esta es la forma de utilizar SweetAlert 2, por si te interesa aprender más sobre su uso puedes revisar su
            // sitio oficial https://sweetalert2.github.io/ pero no es necesario.
            Swal.fire({
                title: "Error!",
                text: "Ingresa el nombre de un pokémon primero",
                icon: "error",
                confirmButtonText: "Aceptar.",
            });
        }
    };

    const triggers = () => {
        buttons.search.onclick = () => setPokemonData(pokemonInput.value);
        pokemonInput.onkeyup = (event) => {
            event.preventDefault();
            if (event.key === "Enter") {
                setPokemonData(pokemonInput.value);
            }
        }
        buttons.next.onclick = () => setPokemonData(+containers.pokemonIdElement.value + 1);
        buttons.previous.onclick = () => setPokemonData(+containers.pokemonIdElement.value - 1);

    };
    setLoadingComplete();
    triggers();
};

window.onload = pokedex;