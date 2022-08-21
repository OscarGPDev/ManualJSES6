const todoApp = () => {
    // La siguiente clase nos ayudará a manejar la lista de tareas, de tal forma que sea más sencillo agrupar
    // y realizar las operaciones más comunes
    class StorageTodoAppHelper {
        constructor(storageName, initialValue) {
            // La storage API https://developer.mozilla.org/es/docs/Web/API/Storage provee acceso al almacenamiento,
            // existe por sesión y por almacenamiento local, en este caso usaremos la que tiene mayor persistencia, localStorage
            // Storage usa simplemente conjuntos clave valor, getItem nos da el valor al proporcionar la clave,
            // devuelve nulo si no existe
            let currentStorage = localStorage.getItem(storageName);
            if (!currentStorage) {
                // Si no existe aún, la inicializamos
                localStorage.setItem(storageName, JSON.stringify(initialValue));
                currentStorage = initialValue;
            } else {
                // En caso contrario, la convertimos en un objeto JSON, storage solo almacena cadenas de texto,
                // por eso es necesaria esta conversión
                currentStorage = JSON.parse(currentStorage);
            }
            // Guardamos tanto los valores actuales como el nombre de la sección de almacenamiento que utilizaremos
            // Los valores ya leídos se guardan para evitar la lectura y conversión constante de storage,
            // lo cual puede demorar conforme el objeto crece
            this._storageName = storageName;
            this._currentValues = currentStorage;
        }

        addItem(newItem) {
            // cuando se agrega un valor, lo agregamos a los valores ya cargados, haciendo un respaldo en storage
            this._currentValues.push(newItem);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }


        getItem(findFunction) {
            // cuando se quiere consultar un valor en específico, no es necesario buscarlo en storage, basta con
            // consultarlo en los valores ya cargados
            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem) {
            // cuando se actualiza un valor, lo actualizamos a los valores ya cargados, haciendo un respaldo en storage
            const itemIndex = this._currentValues.findIndex(findFunction);
            this._currentValues[itemIndex] = {...this._currentValues[itemIndex], ...newItem};
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItems() {
            // cuando se quiere consultar los items, no es necesario buscarlo en storage, basta con consultarlo en los valores ya cargados
            return this._currentValues;
        }

        deleteItem(findFunction) {
            // cuando se elimina un valor, lo actualizamos a los valores ya cargados, haciendo un respaldo en storage
            this._currentValues.splice(this._currentValues.findIndex(findFunction), 1);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }
    }

    // Se carga el template usado para crear elementos de la lista de tareas
    const loadListItemTemplate = () => {
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML.trim();
        // Una vez leida la plantilla, se elimina
        templateDomItem.remove();
        return template;
    };
    // Cargamos los elementos del DOM que necesitaremos
    const DOMElements = {
        taskName: document.getElementById("txtTaskName"),
        addButton: document.getElementById("btnAddTask"),
        taskList: document.getElementById("taskList"),
        changeWallpaperButton: document.getElementById("btnChangeWallpaper"),
        editUser: document.getElementById("editUser"),
        bitcoinData: document.getElementById("bitcoinData"),
        updateBitcoinData: document.getElementById("updateBitcoinData")
    };
    // Inicializamos la plantilla y la sección de storage que utilizaremos
    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("todoApp", []);
    // Esta función se usa para marcar una tarea como completada o como pendiente
    const toggleTask = (domItem) => {
        if (domItem) {
            storage.updateItem((item) => item.id === +domItem.id, {completed: !domItem.classList.contains("completed")});
        }
        if (!domItem.classList.contains("completed")) {
            domItem.classList.add("completed");
        } else {
            domItem.classList.remove("completed")
        }
    };
    // Esta función se usa para eliminar una tarea de la lista
    const deleteTask = (domItem) => {
        if (domItem) {
            storage.deleteItem((item) => item.id === +domItem.id)
        }
        domItem.parentElement.remove();
    };
    // Crea un elemento de la lista de tareas
    const createDOMTaskElement = (task) => {
        // Creamos un elemento del DOM y llenamos los datos de la plantilla
        const template = document.createElement('li');
        template.innerHTML = listItemTemplate
            .replace("{id}", task.id)
            .replace("{template}", task.value)
            .replace("{completed}", task.completed ? "completed" : "");
        // Accedemos a los nodos hijos creados de la plantilla, los cuales son los botones, y
        // les asignamos los eventos a cada botón respectivo
        const ourContent = template.firstChild;
        ourContent.childNodes.forEach(child => {
            if (child.classList?.contains("complete")) {
                child.onclick = () => toggleTask(ourContent)
            }
            if (child.classList?.contains("delete")) {
                child.onclick = () => deleteTask(ourContent)
            }
        });
        // Agregamos el elemento recién creado a la lista de tareas
        DOMElements.taskList.append(template);
    }
    // Esta es la función de renderizado
    const renderTasks = () => {
        // Si no tiene tareas la lista, lo indicamos
        DOMElements.taskList.innerHTML = storage.getItems() ? "" : "<li>No hay tareas aun</li>";
        // Procesamos los elementos que cargamos del storage
        storage.getItems().forEach(task => createDOMTaskElement(task));
    };
    // Es la función de agregar una nueva tarea a la lista
    const addTask = () => {
        if (DOMElements.taskName.value) {
            const newTask = {
                id: Date.now(),
                value: DOMElements.taskName.value,
                completed: false
            }
            // Guardamos el elemento en storage, limpiamos el campo de texto y creamos el elemento de la nueva tarea
            storage.addItem(newTask);
            DOMElements.taskName.value = "";
            createDOMTaskElement(newTask);
        }
    };
    // Solicita que el usuario se "registre", es de esta forma que se crean las sesiones en una aplicación de frontend
    // solo que se suelen usar token, en lugar del nombre, y en lugar de solicitarlo por un diálogo, se hace uso de
    // fetch para pedir a un servidor el token, usualmente proporcionando el nombre de usuario y contraseña :D
    const requestUser = async () => {
        const {value: userName} = await Swal.fire({
            input: 'text',
            inputLabel: 'Introduce tu nombre',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputValidator: (value) => {
                if (!value?.trim()) {
                    return 'Introduce tu nombre!'
                }
            },
            inputPlaceholder: 'Introduce tu nombre',
        });
        if (userName) {
            // Como puedes ver funciona de forma igual a como se guardan las tareas
            localStorage.setItem("userName", userName);
            document.getElementById("title").innerHTML = `Bienvenido ${userName}!`;
        }
    };
    // Esta función cambia el wallpaper de la función
    const changeWallpaper = async () => {
        const {value: url} = await Swal.fire({
            input: 'url',
            inputLabel: 'Introduce la URL del wallpaper',
            inputPlaceholder: 'Introduce la URL del wallpaper',
            validationMessage: "La URL no es valida"
        });

        if (url) {
            localStorage.setItem("wallpaper", url);
            document.querySelector("body").style.background = `url(${url}) no-repeat center`;
        }
    };
    // Se utiliza la función fetch para obtener la información de
    const getBitcoinData = async () => {
        const bitcoinData = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => response.json());
        const strBitcoinData = `$${bitcoinData.bpi.USD.rate} - fecha de actualizacion: ${new Date(bitcoinData.time.updated).toLocaleDateString()}`;
        DOMElements.bitcoinData.innerHTML = strBitcoinData;
        localStorage.setItem("bitcoinData", strBitcoinData);
    }
    // Esta función simplemente agrega las acciones a los botones
    const triggers = () => {
        DOMElements.addButton.onclick = addTask;
        DOMElements.taskName.onkeyup = (event) => {
            event.preventDefault();
            if (event.key === "Enter" && DOMElements.taskName.value) {
                storage.addItem({
                    id: Date.now(),
                    value: DOMElements.taskName.value,
                    completed: false
                });
                renderTasks();
                DOMElements.taskName.value = "";
            }
        };
        DOMElements.changeWallpaperButton.onclick = changeWallpaper;
        DOMElements.editUser.onclick = requestUser;
        DOMElements.updateBitcoinData.onclick=getBitcoinData;
    };
    // Esta función inicializa los elementos necesarios
    const init = () => {
        // verifica si tiene un wallpaper almacenado
        const currentWallpaper = localStorage.getItem("wallpaper");
        if (currentWallpaper) {
            document.querySelector("body").style.background = `url(${currentWallpaper}) no-repeat center`;
        }
        // verifica si tiene el usuario ya puso su nombre, si no, lo solicita
        const currentUserName = localStorage.getItem("userName");
        if (!currentUserName) {
            requestUser();
        } else {
            document.getElementById("title").innerHTML = `Bienvenido ${currentUserName}!`;
        }
        // Se coloca la información del storage si existe
        const storedBitcoinData = localStorage.getItem("bitcoinData");
        if (storedBitcoinData) {
            DOMElements.bitcoinData.innerHTML = storedBitcoinData;
        }

        // asigna las acciones a los botones y pinta las tareas previamente guardadas
        triggers();
        renderTasks();
    };


    // llama a la función de inicializar
    init();
};
window.onload = todoApp;