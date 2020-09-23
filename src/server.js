/*requerimos el módulo express y express-handlebars,
y  lo almacenamos en constantes*/
const express= require('express');
const exphbs= require('express-handlebars');

/*se invoca el objeto obtenido para crear
una aplicación Express.*/
const app= express();

/*invocamos el módulo path,el cual provee varias
 utilidades  para trabajar con ficheros y directorios.*/
const path= require('path');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'/views'));
app.engine('.hbs',exphbs({
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname:'.hbs'
}));

/*se establece el motor de vistas,hbs*/
app.set('view engine','.hbs');

//rutas 
app.use(require('./routes/index.routes'));

/*static files / archivos estáticos */
app.use(express.static(__dirname+path.join('/public')));

console.log(__dirname);

//exportamos el servidor
module.exports =  app;

