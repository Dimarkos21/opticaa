const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    cantidad: String,
  costo: String,
  
  precio: String,


    checked: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

productoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Productos = mongoose.models.Productos || mongoose.model('Productos', productoSchema);

module.exports = Productos;
