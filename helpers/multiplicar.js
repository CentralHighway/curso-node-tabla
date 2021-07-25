const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida, consola = "";

        for (let index = 0; index <= hasta; index++) {
            salida += (`${base} x ${index} = ${base * index}\n`); // "+=" es lo mismo que hacer salida = salida +
            consola += (`${base} ${"x".green} ${index} ${"=".green} ${base * index}\n`); // Salida es lo que se va a guardar en el .txt y consola es lo que se va a mostrar en consola con colores
        }

        if (listar == true) {
            console.log("=============".green)
            console.log("Tabla del:".green, colors.blue(base))
            console.log("=============".green)

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // Si no le pasamos el path toma de path la ruta actual del archivo

        return (`Tabla del ${base}.txt`);

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo // funcion: crearArchivo (en EcmaScript es redundante tener una propiedad que apunta a una variable que tiene su mismo nombre)
}