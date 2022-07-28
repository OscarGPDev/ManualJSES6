// Si revisaste los archivos adicionales te deberías de dar cuenta que es util tener código comentado, con esto en mente
// existe una sintaxis para documentar código en JavaScript, se llama JSDoc, aparte de ayudar a entender el código,
// JSDoc permite a los editores de código como (VSCode, Sublime, Atom) e IDE obtener información para mostrar cuando se use la función, clase o método
// y es sencillo de utilizar, realmente es información escrita en un comentario.
/**
 * Esta función divide a entre b
 * @example
 * // returns 2
 * dividir(10, 5);
 * @example
 * // returns 3
 * dividir(15, 5);
 * @returns {Number} Regresa el resultado de la división.
 * @param a{Number} Dividendo
 * @param b{Number} Divisor
 */
const dividir = (a, b) => {
    return a / b;
};
/**
 * Esta función obtiene información meteorológica consultando la API de 7timer (http://www.7timer.info/doc.php?lang=en#api)
 * @example
 * consultarElClima(113.2, 23.1);
 * @returns {Object} Regresa un objeto JSON, el contenido dicho objeto puede revisarse en http://www.7timer.info/doc.php?lang=en#api. Si la petición falla, se agrega el campo requestFailed al objeto.
 * @param long{Number} Longitud de la región
 * @param lat{Number} Latitud de la región
 */
const consultarElClima = async (long, lat) => {
    return await fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=astro&output=json`)
        .then(response => response.json())
        .catch((error) => ({requestFailed: true}));
}
// Como puedes ver, su uso es sencillo, revisa el resto de etiquetas en https://jsdoc.app/