/*Requerimos las configuraciones de dotenv, 
para las variables de entorno*/
require('dotenv').config();

/*Requerimos el archivo con el código de servidor,y
lo almacenamos en una constante*/
const app = require('./server');

/*puerto*/
var port=app.get('port');

require('./mongo.js');

/*escucha las conexiones en el puerto dado*/
app.listen(port, () => {
console.log('Running server on port',port)
console.log('Estoy bien solo alv :ccccc');
var r = false; 
});