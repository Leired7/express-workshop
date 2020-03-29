// Nodejs -- para acceder a las funcionalidades de una librería o módulo de otro archivo hay que requerirlo (tengo Express instalado, ahora incluyo las dependencias en este archivo para poder usar sus métodos)

/* importación de Express */
var express = require("express");

// Para inciar el servidor tengo que llamar a la función express() y se creará una aplicación de Express con la que trabajar

/* Iniciar el servidor */
var app = express();

//Middleware de Express que extraerá los datos del formulario del request
var formidable = require("express-formidable");

app.use(formidable());

//usar fs
var fs = require("fs");

fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  //convertir JSON  objeto JS
  var parsedFile = JSON.parse(file);
  console.log(file.toString());
});
//Elegir un puerto por el que nuestro servidor escuchará
//Hay que usar el método app.listen (un puerto, una función callback (respuesta))

/* Ejecutar el servidor en el puerto 3000, y haremos console.log en nuestro callback */

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to acept requests!");
});

app.use(express.static("public"));

app.post("/create-post", function(req, res) {
  console.log("soy req.fields", req.fields);
});

/* let examplePost = {[timestamp]: [blog post message]};
 */

//Guardando en el disco duro
/* fs.writeFile(__dirname + 'data/post.json', examplePost,function(error
){
  if(error){
    console.log(error);
  }else {
    console.log(`${timestamp} was added successfully`)
  }
})
 */
//Leer datos en el disco duro

/* fs.readFile('locationOfTheFile', function(error, file){

})
 */
