/*
    1.7 Promesas
* */
// La siguiente función será utilizada como callback en caso de que la operación sea exitosa.
const fueExitosa = (resultado) => {
    console.log(`La operación fue exitosa ${resultado}`);
}
// La siguiente función será utilizada como callback en caso de que la operación falle.
const fueErronea = (resultado) => {
    console.log(`La operación fue fallo ${resultado}`);
}
// Una promesa, recibe una función principal que tiene dos parametros, el callback en caso de éxito y el callback en caso de fallo en ese orden.
const miPromesaSiFunciona = new Promise((salioBien, salioMal) => {
    // En la función principal va código que no se pueda completar de forma sincrona o 'instantanea'
    // tal como peticiones a un servidor externo.
    try {
        const division = 10 / 5;
        // Como no hay nada malo con este código se ejecutará la función fueExitosa
        salioBien(division);
    } catch (e) {
        salioMal(e);
    }
});
// Hay dos formas de usar los callbacks, pasando ambos en el then, o pasando solo la de éxito en el then y usando un catch.
miPromesaSiFunciona.then(fueExitosa, fueErronea);
// La siguiente linea es equivalente de la anterior
miPromesaSiFunciona.then(fueExitosa).catch(fueErronea);
// También se suelen usar funciones anónimas 
miPromesaSiFunciona.then((resultado) => {
    console.log(`La operación fue exitosa ${resultado}`);
}).catch((resultado) => {
    console.log(`La operación fue fallo ${resultado}`);
});
/*
    Algo MUY IMPORTANTE de las promesas, es recordar que son asíncronas, quiere decir, que no se ejecutan de forma inmediata
    sino que una vez que termina su ejecución con then determina que hacer, supongamos que nuestra función de éxito regresa un
    valor y queremos usarlo en otra parte del código, esto tendría que ir dentro de otro then anidado o hacer uso de async y await
* */
miPromesaSiFunciona.then((resultado) => {
    console.log(`La operación fue exitosa ${resultado}`);
    return resultado;
}).then(resultadoDeCallbackDeExito => {
    // Aquí irían las instrucciones que dependen del resultado anterior, podemos usar tantos como queramos, ya que cada then
    // regresa una promesa
});
// Para hacer uso del segundo método, async y await, tendríamos que usar una función asíncrona que hace uso de la promesa
// Para una función normal la sintaxis es la siguiente
async function unaFuncionNormalAsincrona() {
    const resultadDeLaPromesa = await miPromesaSiFunciona.then((resultado) => {
        console.log(`La operación fue exitosa ${resultado}`);
        return resultado;
    });
    /* La variable 'resultadoDeLaPromesa' contiene el valor 'resultado' que esta en el return, pero solo porque usamos await
    * si no usamos await, 'resultadoDeLaPromesa' tendría una promesa y NO podríamos hacer uso de 'resultado'
    * */
    console.log(resultadDeLaPromesa);
}

// Para una función flecha la sintaxis es la siguiente
const unaFuncionFlechaAsincrona = async () => {
    const resultadDeLaPromesa = await miPromesaSiFunciona.then((resultado) => {
        console.log(`La operación fue exitosa ${resultado}`);
        return resultado;
    });
    /* La variable 'resultadoDeLaPromesa' contiene el valor 'resultado' que esta en el return, pero solo porque usamos await
    * si no usamos await, 'resultadoDeLaPromesa' tendría una promesa y NO podríamos hacer uso de 'resultado'
    * */
    console.log(resultadDeLaPromesa);
}
// Finalmente, tendríamos que llamar a la función, asi mismo, una función asíncrona, siempre devuelve una promesa,
// que podemos o no ignorar segun sea el caso
unaFuncionNormalAsincrona();
unaFuncionFlechaAsincrona();
