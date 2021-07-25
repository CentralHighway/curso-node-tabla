const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

// console.log(process.argv); // Nos muestra los argumentos de los procesos de la consola.

// const [, , arg3 = "base=5"] = process.argv; // Desetructuración de arreglo
// const [, base = 5] = arg3.split("=") // Con el método split dividimos a arg3 en 2, tomamos de divisor al signo igual y tomamos el índice 1.

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, "Creada".green))
    .catch(err => console.log(err))