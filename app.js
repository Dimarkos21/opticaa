require('dotenv').config();
const { log } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const todosRouter = require('./controllers/todos');
const client = require('./controllers/mensaje');
const { userExtractor } = require('./middleware/auth');
const productosRouter = require('./controllers/productos');



(async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('conectado correctamente');
    } catch (error) {
        console.log(error);
    }
})();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//rutas frontend
app.use('/', express.static(path.resolve('Publico', 'Home')));
app.use('/Login', express.static(path.resolve('Publico', 'Login')));
app.use('/Registro', express.static(path.resolve('Publico', 'Registro')));
app.use('/Casa', express.static(path.resolve('Publico', 'Casa')));
app.use('/Inventario', express.static(path.resolve('Publico', 'Inventario')));
app.use('/Mensajes', express.static(path.resolve('Publico', 'Mensajes')));
app.use('/Productos', express.static(path.resolve('Publico', 'Productos')));
app.use('/img', express.static(path.resolve('Publico', 'img')));
app.use(morgan('tiny'));

// rutas backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);


app.use('/api/todos', userExtractor,todosRouter);
app.use('/api/productos', userExtractor,productosRouter);
app.use(morgan('tiny'));
module.exports = app;





