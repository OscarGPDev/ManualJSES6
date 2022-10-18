const mirror = (req, res) => {
    const methods = [{
        method: "POST",
        hasBody: true,
        purpouse: "El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor."
    }, {
        method: "PUT",
        hasBody: true,
        purpouse: "El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición."
    }, {
        method: "PATCH",
        hasBody: true,
        purpouse: "El método PATCH es utilizado para aplicar modificaciones parciales a un recurso."
    }, {
        method: "HEAD",
        hasBody: false,
        purpouse: "El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta."
    }, {
        method: "GET",
        hasBody: false,
        purpouse: "El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos."
    }, {
        method: "DELETE",
        hasBody: false,
        purpouse: "El método DELETE borra un recurso en específico."
    }
    ];
    const requestMethod = methods.find(m => m.method === req.method) || {
        method: req.method,
        hasBody: false,
        purpouse: "No tiene body"
    };
    requestMethod.purpouse+=requestMethod.hasBody?"Tiene cuerpo":"No tiene cuerpo";
    if (requestMethod.hasBody){
        req.body; // JavaScript object containing the parse JSON
        res.json({...req.body, ruta_consumida: req.route.path, ...requestMethod});
    }else{
        res.json({ruta_consumida: req.originalUrl, ...requestMethod});
    }

}
module.exports = mirror