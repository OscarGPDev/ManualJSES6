/**
 * 1.6 Desestructuración
 */
// Tenemos el siguiente arreglo, en este caso ordenado
const arregloOrdenadoMayorAMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(`arregloOrdenadoMayorAMenor: ${arregloOrdenadoMayorAMenor}`)
// Supongamos que usara varias veces la primera posición, que consiste en el valor mas grande del arreglo, es conveniente desestructurarlo para tener un nombre más significativo
const [valorMasGrande] = arregloOrdenadoMayorAMenor;
console.log(`valorMasGrande: ${valorMasGrande}`);
// Podemos obtener tantas variables como deseemos, pero solo se puede hacer en orden, es decir, no podemos extraer una posición especifica, siempre empezaremos por la 0
// Con el patrón rest que se indica con '...nombreDeLaVariable', podemos asignar el resto de valores en otra variable
const [valorMasGrande1, segundoValorMasGrande, tercerValorMasGrande, ...restoDeValores] = arregloOrdenadoMayorAMenor;
console.log(`valorMasGrande1, segundoValorMasGrande, tercerValorMasGrande, ...restoDeValores: ${valorMasGrande1}, ${segundoValorMasGrande}, ${tercerValorMasGrande}, ${restoDeValores}`);

// Supongamos que tenemos el siguiente objeto que ejemplifica el resultado de una búsqueda.
const resultadoDeBusqueda = {
    resultados: [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7",
    ],
    total: 7,
    mejorCoincidencia: "resultado 3"
};
console.log(`resultadoDeBusqueda: ${resultadoDeBusqueda}`);
// Supongamos que solo nos interesa la mejor coincidencia, podemos desestructurar un objeto de la siguiente manera.
const {mejorCoincidencia} = resultadoDeBusqueda;
console.log(`mejorCoincidencia: ${mejorCoincidencia}`);
// Ademas, podemos cambiarles el nombre, lo cual puede llegar a ser util para mantener la consistencia en el código, haciendo uso de la siguiente nomenclatura
const {mejorCoincidencia: nuevoNombre} = resultadoDeBusqueda;
console.log(`nuevoNombre: ${nuevoNombre}`);
// Otro uso util de la desestructuración es que podemos crear copias, tanto de objetos y arreglos. Spoiler: es muy útil y especialmente necesario en React
const copiaDelResultadoDeBusqueda = {...resultadoDeBusqueda};
console.log(`copiaDelResultadoDeBusqueda: ${copiaDelResultadoDeBusqueda}`);
const copiaDeArregloOrdenado = [...arregloOrdenadoMayorAMenor];
console.log(`copiaDeArregloOrdenado: ${copiaDeArregloOrdenado}`);
// Al desestructurar podemos agregar información.
const copiaDelResultadoDeBusquedaModificada = {...resultadoDeBusqueda, cadenaBuscada: "resultado 3"};
console.log(`copiaDelResultadoDeBusquedaModificada: ${copiaDelResultadoDeBusquedaModificada}`);
const copiaDeArregloOrdenadoConNuevoMayor = [11, ...arregloOrdenadoMayorAMenor];
console.log(`copiaDeArregloOrdenadoConNuevoMayor: ${copiaDeArregloOrdenadoConNuevoMayor}`);
