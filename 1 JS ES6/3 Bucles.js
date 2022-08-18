/**
 * 1.3 Bucles
 */
const razasDePerros = [
    "Dogo Alemán o Gran Danés",
    "Dogo de Burdeos",
    "Dogo argentino",
    "San Bernardo",
    "Mastín del Pirineo",
    "Mastín Español",
    "Boyero de Berna",
    "Pastor Yugoslavo",
    "Lobero irlandés",
    "Bobtail"
];
// Iteraremos sobre este arreglo de razas de perros
// Primero con un for tradicional
for (let indice = 0; indice < razasDePerros.length; indice++) {
    console.log(razasDePerros[indice]);
}
// Con un for/of queda de la siguiente manera
for (const raza of razasDePerros) {
    console.log(raza);
}
// También existe el bucle for/in que iterará sobre las llaves del objeto, en el caso de un arreglo, estas llaves son los indices
for (const indice in razasDePerros) {
    console.log(razasDePerros[indice]);
}