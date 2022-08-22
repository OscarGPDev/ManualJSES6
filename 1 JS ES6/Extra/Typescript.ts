/*
JavaScript es sumamente utilizado en el desarrollo web, sin importar si usamos Java, Python, Ruby, PHP, si nos referimos
a programación web, todos los caminos llevan a JavaScript, especialmente en el desarrollo de frontend, no obstante,
a pesar de eso, JavaScript puede llegar a dar dolor de cabeza, debido a que es débilmente tipado, para resolver eso es
que nació TypeScript. TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por
Microsoft, TypeScript, es un lenguaje compilado a JavaScript, esto es que nosotros metemos código TypeScript, y al compilar
obtenemos código JavaScript. Su propósito es agregar tipos, como descubrirás a continuación.
* */
// Supongamos que tenemos el objeto JSON
const user = {
    name: "Hayes",
    id: 0,
};
// En JavaScript, si accedemos a una propiedad que no existe en el objeto no se nos marcará ningún error, solo se nos mostrará
// undefined
console.log(user.lastName); // esto imprime undefined
/**
 * Esto trae consigo un problema, al no haber un error podríamos no percatarnos que esa propiedad no existe, y si
 * este objeto se revisa dentro de una función o se cascadea, detectar la falla puede llegar a ser tedioso, para evitar esto
 * es que existe TypeScript, si bien seguimos usando JavaScript, los tipos nos alertarán de este tipo de errores durante
 * la compilación. TypeScript, tiene como objetivo ayudarnos a producir código de mejor calidad.
 */
// Esto es una interfaz, indica un conjunto de elementos y su tipo de valor
interface User {
    name: string;
    id: number;
};
// Asi se indica que userTypeUser es un objeto de tipo User que tiene un campo name de tipo string y un campo id de tipo numérico
const userTypeUser: User = {};
console.log(userTypeUser.lastName)// Esto nos marcará error en el proceso de compilación, ya que no existe el campo lastName
// Podemos usar interfaces dentro de otras para crear objetos con estructuras más complejas
interface ExtendedUser {
    user: User,
    credit: number
}

// también podemos especificar estos datos en la cabecera de una función para pedir por un tipo específico de objeto como
// parámetro
const printUserCredit = (user: ExtendedUser) => console.log(user.credit);
// Si le pasamos un objeto que no es de tipo ExtendedUser como parámetro obtendremos otro error indicando que no coincide
// con el tipo de objeto que la función solicita.
printUserCredit(user);
// También podemos indicar el tipo de dato que regresa una función, por ejemplo
const dateToString = (date: Date): string => date.toLocaleDateString();

// si usáramos una función normal, la sintaxis es
function dateToStringNormal(date: Date): string {
    return date.toLocaleDateString();
}

// También podemos especificar un tipo de dato que tendrá un arreglo
const usersArray: User[] = new Array<User>();
// De esta manera si intentáramos agregar un objeto de otro tipo, obtendremos otro error
// TypeScript, es un lenguaje que nos permite prevenir y detectar algunos errores desde el desarrollo
// Felicidades, ya sabes TypeScript!
// Si quieres profundizar más accede a su documentación oficial en el siguiente enlace:
// https://www.typescriptlang.org/docs/