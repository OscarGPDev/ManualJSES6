const todoApp = () => {
    const loadListItemTemplate = () => {
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML;
        templateDomItem.remove();
        return template;
    }
    const listItemTemplate = loadListItemTemplate();
}
window.onload = todoApp;