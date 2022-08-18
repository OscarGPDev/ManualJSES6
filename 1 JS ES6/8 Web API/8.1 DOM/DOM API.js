window.onload = () => {
    // Nuestro propósito es hacer un carrusel de imágenes que permita insertar algunos mensajes
    const imagenes = [
        "https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png",
        "https://w.wallhaven.cc/full/j3/wallhaven-j3gz1w.jpg",
        "https://w.wallhaven.cc/full/72/wallhaven-725mg9.png",
        "https://w.wallhaven.cc/full/rd/wallhaven-rd83mq.jpg"
    ];
    // Con la API de DOm podemos acceder como se mencionó anteriormente a los elementos de un documento HTML,
    // para esto, necesitamos buscar estos nodos de alguna manera que esta nos permita identificarlos.
    // Podemos buscar a los elementos de varias maneras en un documento por ejemplo por su id, por nombre, clases o etiquetas.
    // De estos atributos, solo la búsqueda por ID nos devolverá un único elemento, los demás devolverán una lista de nodos
    // la cual no debe confundirse con un arreglo, observe como obtengo los botones, por ejemplo, quería hacer uso
    // de la función find de la clase array que vimos anteriormente, pero no está disponible en la lista que devuelve
    // getElementsByName por lo que fue necesario usar el método from de la clase Array
    // cabe mencionar que no se hizo uso de la "mejor forma", si no con fines didácticos para hacer uso de diferentes métodos.
    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");
    // Además de estos selectores, existen dos genéricos que hacen uso de selectores de CSS (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
    // estos son querySelector (https://developer.mozilla.org/es/docs/Web/API/Document/querySelector) y
    // querySelectorAll(https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll) que devuelven un elemento único
    // y una lista que NO es un arreglo, haremos uso de la consulta de botones, una equivalente quedaría:
    // const botones = Array.from(document.querySelectorAll("button[name='boton']"));
    // también podemos especificar que queremos un único elemento
    // const botonSiguiente = document.querySelector("button[name='boton'][id='siguiente']");
    // como puedes ver se pueden hacer consultas más sofisticadas, aunque en realidad, es mejor mantener una forma de acceso simple
    let imagenActual = 0;
    const imagenSiguiente = () => {
        // Accedemos a la imagen dentro del arreglo con su índice, cuando es la última regresamos a la primera
        if (imagenActual < imagenes.length - 1) {
            imagenActual++;
        } else {
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };
    const imagenAnterior = () => {
        // Accedemos a la imagen dentro del arreglo con su índice, cuando es la primera regresamos a la última
        if (imagenActual > 0) {
            imagenActual--;
        } else {
            imagenActual = imagenes.length - 1;
        }
        display.src = imagenes[imagenActual];
    };
    const pantallaCompleta = () => {
        // Podemos hacer que diversos elementos HTML soliciten la pantalla completa del navegador, además, este método
        // devuelve una promesa por si queremos hacer una manejo posterior a que el elemento esté en pantalla completa
        display.requestFullscreen();
    };
    const mostrarMensaje = () => {
        // otra de las cosas que podemos hacer es modificar el HTML interno de un elemento, esto es util para agregar de
        // forma dinámica nuevos elementos ya sea como texto
        mensajes.innerHTML += `${campoMensaje.value}<br/>`;
        campoMensaje.value = "";
        // o por si queremos manipular los elementos recién creados con
        // createElement de la siguiente manera:
        // const lista = document.createElement("ul");
        // const elementoLista = document.createElement("li");
        // elementoLista.onclick=pantallaCompleta;
        // elementoLista.innerHTML=`${campoMensaje.value}`;
        // lista.append(elementoLista);
        // mensajes.append(lista);
    };
    const cambiarColor = () => {
        // también mediante la API de DOM podemos simular acciones del usuario, como un clic
        // en este caso, por fines estéticos, en lugar de usar el input type color, usamos un botón con un icono que
        // transfiere el clic
        colorValor.click();
    };
    const inicializar = () => {
        // Otro uso de la API DOM es asignar eventos, nótese que en el documento HTML no tiene ninguno
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;
        // en general podemos manipular cualquier atributo del elemento HTML
        colorValor.onchange = () => {
            mensajes.style.color = colorValor.value;
        };

        display.src = imagenes[0];
    }
    inicializar();
};