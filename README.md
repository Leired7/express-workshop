<img src="https://github.com/node-girls/workshop-cms/blob/master/readme-images/logo.png?raw=true">

# Express Workshop

This is the code for our introductory workshop to Node.js and Express. You'll be building your own platform to write, publish and save blog posts (a basic content management system, or CMS).

The workshop itself can be found <a href="https://node-girls.gitbook.io/intro-to-express">here</a>

-- Hasta el capítulo 6 he hecho esto --

// Nodejs -- para acceder a las funcionalidades de una librería o módulo de otro archivo hay que requerirlo (tengo Express instalado, ahora incluyo las dependencias en este archivo para poder usar sus métodos)

/_ importación de Express _/
var express = require("express");

// Para inciar el servidor tengo que llamar a la función express() y se creará una aplicación de Express con la que trabajar

/_ Iniciar el servidor _/
var app = express();

//Elegir un puerto por el que nuestro servidor escuchará
//Hay que usar el método app.listen (un puerto, una función callback (respuesta))

/_ Ejecutar el servidor en el puerto 3000, y haremos console.log en nuestro callback _/

app.listen(3000, function() {
console.log("Server is listening on port 3000. Ready to acept requests!");
});

// Handler function - es un función que recibe requests y las maneja (request alcanza el servidor y hace falta una forma de responder)

//request - mensaje enviado vía HTTP desde el cliente al servidor pidiendo información

// "handler function" siempre toma una request y objeto response, y manda la respuesta de vuelta al cliente con información

/\_ El método get() se usa para recuperar información que tiene el servidor

para definir una "handler function"(Express).
Necesita dos parámetros: ·endpoint que va disparar la acción y · "handler function" indica exactamente qué hay que hacer \_/

app.get("/", function(req, res) {
/_ "handler function envíe de vuelta un mensaje a le cliente". Usar el método de Express send() _/
res.send("Yay Node Girls!");
});

// Mi servidor sólo hace una cosa. Al recibir una request desde el endpoint raíz /, manda de vuelta la misma response: "Yay Node Girls!"

//Usando los endpoints, puedo conseguir que el servidor mande diferentes response para diferentes requests. Este concepto se denomina routing

//Endpoint - la parte de la URL que viene después de /. Es la URL a la que mandas la request

/_ Crear endpoints propios y mandar diferentes responses _/

app.get("/chocolate", function(req, res) {
res.send("Mm chocolate :O");
});

app.get("/node", function(req, res) {
res.send("Taller de Nodejs y Express");
});

app.get("/girls", function(req, res) {
res.send("Go Node-Girls!!");
});

//Métodos HTTP request (principales métodos): GET, POST, PUT, PATCH Y DELETE

/_Método HTTP request POST_/

// Mandar datos al servidor, método HTTP request POST

//Añadir formulario para que pueda escribir los artículos del blog desde ahí.

//·formulario textarea y botón enviar
//· atributo action es el endpoint a donde los datos del formulario se van a enviar
//· atributo name será usado más tarde para hacer referencia a los datos.

//Al pulsar enviar, el formulario enviará un request por POST al servidor, usando lo que ponga en el atributo action como endpoint ("/create-post")

//server.js -- escribir código para manejar los request que vengan al endpoint (POST /create-post)

/_Recibiendo el artículo del blog en el servidor_/

Los datos no llegan al servidor de una pasada, fluyen al servidor como un stream (agura fluyendo de un grifo a un cubo)

Express se encarga de recolectar el stream de forma apropiada

Hay que definir la ruta que va a manejar las requests que vengan a través del endpoint /create-post
