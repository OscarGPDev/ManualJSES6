const todoApp = () => {
    class StorageTodoAppHelper {
        constructor(storageName, initialValue) {
            let currentStorage = localStorage.getItem(storageName);
            if (!currentStorage) {
                localStorage.setItem(storageName, JSON.stringify(initialValue));
                currentStorage = initialValue;
            } else {
                currentStorage = JSON.parse(currentStorage);
            }
            this._storageName = storageName;
            this._currentValues = currentStorage;
        }

        addItem(newItem) {
            this._currentValues.push(newItem);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }


        getItem(findFunction) {
            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem) {
            const itemIndex = this._currentValues.findIndex(findFunction);
            this._currentValues[itemIndex] = {...this._currentValues[itemIndex], ...newItem};
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItems() {
            return this._currentValues;
        }

        deleteItem(findFunction) {
            this._currentValues.splice(this._currentValues.findIndex(findFunction), 1);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }
    }

    const loadListItemTemplate = () => {
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML.trim();
        templateDomItem.remove();
        return template;
    }
    const DOMElements = {
        taskName: document.getElementById("txtTaskName"),
        addButton: document.getElementById("btnAddTask"),
        taskList: document.getElementById("taskList"),
    };
    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("todoApp", []);
    const toggleTask = (domItem) => {
        if (domItem) {
            storage.updateItem((item) => item.id === +domItem.id, {completed: !domItem.classList.contains("completed")});
        }
        renderTasks();
    };
    const deleteTask = (domItem) => {
        if (domItem) {
            storage.deleteItem((item) => item.id === +domItem.id)
        }
        renderTasks();
    };
    const renderTasks = () => {
        DOMElements.taskList.innerHTML = storage.getItems() ? "" : "<li>No hay tareas aun</li>";
        console.log("rendering")
        storage.getItems().forEach(task => {
            // El elemento template se usa para elementos que no se renderizan en el dom de forma inicial
            // https://developer.mozilla.org/es/docs/Web/HTML/Element/template
            const template = document.createElement('li');
            template.innerHTML = listItemTemplate
                .replace("{id}", task.id)
                .replace("{template}", task.value)
                .replace("{completed}", task.completed ? "completed" : "");
            const ourContent = template.firstChild;
            ourContent.childNodes.forEach(child => {
                if (child.classList?.contains("complete")) {
                    child.onclick = () => toggleTask(ourContent)
                }
                if (child.classList?.contains("delete")) {
                    child.onclick = () => deleteTask(ourContent)
                }
            });
            DOMElements.taskList.append(template);
        });
    };
    const addTask = () => {
        if (DOMElements.taskName.value) {
            storage.addItem({
                id: Date.now(),
                value: DOMElements.taskName.value,
                completed: false
            });
            DOMElements.taskName.value = "";
            renderTasks();
        }
    };
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
    };
    triggers();
    renderTasks();

};
window.onload = todoApp;