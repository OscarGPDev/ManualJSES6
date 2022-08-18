/**
 * 1.4 La clase Array
 */
// forEach: itera sobre los elementos del arreglo, NO regresa nada
// La siguiente línea, hace lo mismo que los bucles hechos anteriormente, este método, itera sobre todos los elementos del arreglo, cada que lo hace ejecuta una función que recibe el elemento de la iteración, su indice y el arreglo original
razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));
// En caso de que no utilicemos  alguno de los parámetros lo podemos omitir, por ejemplo:
razasDePerros.forEach(raza => console.log(raza));

// map: itera sobre los elementos del arreglo, regresa un arreglo con los que nuestra función regrese
const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => raza.toUpperCase());

// Hay algunas otras funciones útiles
// find: nos permite buscar un elemento dentro del arreglo, si lo encuentra, lo regresa, si no, regresa 'undefined'
// El siguiente bloque lo podemos leer como: Si encuentra, en este caso un elemento "chihuahua", imprime que ya lo tienes, en caso contrario, agrégalo.
if (razasDePerros.find((raza, indice, arregloOriginal) => raza === "chihuahua")) {
    // Cabe resaltar que en la función que recibe find podemos hacer cualquier tipo de procesamiento sobre el elemento sin importar que este sea complejo, siempre y cuando regresemos un valor, si no especificamos el regreso por default se interpreta como 'undefined' y este no regresara ningún elemento
    console.log("la raza se encuentra en el arreglo")
} else {
    razasDePerros.push("chihuahua");
}
// findIndex: es similar a find, pero en lugar de regresar el elemento, devuelve su indice, si no lo encuentra, devuelve -1, esta función es particularmente util si tenemos que modificar el elemento original dentro del arreglo.
const indiceDeChihuahua = razasDePerros.findIndex((raza, indice, arregloOriginal) => raza === "chihuahua")
if (indiceDeChihuahua > -1) {
    // Resultado esperado: chihuahua
    console.log(razasDePerros[indiceDeChihuahua]);
    razasDePerros[indiceDeChihuahua] += "(raza de perro pequeña)";
    // Resultado esperado: chihuahua(raza de perro pequeña)
    console.log(razasDePerros[indiceDeChihuahua])
}
