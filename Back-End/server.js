
//Para crear un puerto debemos instalar las dependencias de node  en nuestra maquina y levantar un puerto

//Una vez hecho eso se creeara un archivo .json con las caracteristicas del puerto

//Generamos la escucha del puerto creado con node.js
const { listenerCount } = require('events')
//Generamos un mensaje que se mostrara en pantalla si el server escuchado esta levantado
require('http').createServer((req,res) => res.end(`Soy el Serevr en JS ${8000} - ${new Date().toLocaleString()}`)).listen(8000)