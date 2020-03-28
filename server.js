// Nodejs -- para acceder a las funcionalidades de una librería o módulo de otro archivo hay que requerirlo (tengo Express instalado, ahora incluyo las dependencias en este archivo para poder usar sus métodos)

/* importación de Express */
var express = require("express");

// Para inciar el servidor tengo que llamar a la función express() y se creará una aplicación de Express con la que trabajar

/* Iniciar el servidor */
var app = express();

//Elegir un puerto por el que nuestro servidor escuchará
//Hay que usar el método app.listen (un puerto, una función callback (respuesta))

/* Ejecutar el servidor en el puerto 3000, y haremos console.log en nuestro callback */

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to acept requests!");
});

// Handler function - es un función que recibe requests y las maneja (request alcanza el servidor y hace falta una forma de responder)
// "handler function" siempre toma una request y objeto response, y manda la respuesta de vuelta al cliente con información

/* El método get() se usa para definir una "handler function"(Express).
Necesita dos parámetros: ·endpoint que va disparar la acción y · "handler function" indica exactamente qué hay que hacer */

app.get("/", function(req, res) {
  /* "handler function envíe de vuelta un mensaje a le cliente". Usar el método de Express send() */
  res.send("Yay Node Girls!");
});

// Mi servidor sólo hace una cosa. Al recibir una request desde el endpoint raíz /, manda de vuelta la misma response: "Yay Node Girls!"
