const productosRouter = require('express').Router(); // Router sigue siendo adecuado
const user = require('../models/user'); // Cambié "user" a "User" para que represente mejor el modelo
const ProductosModel = require('../models/productos'); // Cambié "Producto" a "ProductosModel" para reflejar que es un modelo

// Ruta para manejar las solicitudes POST a /api/productos
productosRouter.post("/", async (request, response) => {
    try {
        const user = request.user;
        if (!user) {
            return response.status(401).json({ error: 'Usuario no autenticado' });
        }

        const { nombre, cantidad, costo, precio } = request.body;

        // Crear el producto
        const nuevoProducto = new ProductosModel({
            nombre,
            cantidad,
            costo,
            precio,
            checked: false,
            user: user._id // Relacionarlo con el usuario autenticado
        });

        const productoGuardado = await nuevoProducto.save();

        // Asociar el producto al usuario
        user.productos = user.productos || []; // Asegúrate de que sea un array
        user.productos = user.productos.concat(productoGuardado._id);
        await user.save();

        // Responder al cliente
        return response.status(200).json(productoGuardado);
    } catch (error) {
        console.error('Error al guardar el producto:', error);
        return response.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
});



// Ruta para manejar las solicitudes GET a /api/productos
productosRouter.get("/", async (request, response) => {
    try {
        const productos = await ProductosModel.find({});
        response.json(productos);
    } catch (error) {
        response.status(500).json({ error: 'Ocurrió un error al obtener los productos' });
    }
});


// Ruta para manejar las solicitudes DELETE a /api/productos/:id
productosRouter.delete("/:id", async (request, response) => {  
    try {
        const user = request.user;
        if (!user) {
            return response.status(401).json({ error: 'Usuario no autenticado' });
        }

        const productoId = request.params.id;
        console.log('ID del producto a eliminar:', productoId); // Log del ID

        const producto = await ProductosModel.findById(productoId);
        if (!producto) {
            console.log('Producto no encontrado'); // Log cuando el producto no se encuentra
            return response.status(404).json({ error: 'Producto no encontrado' });
        }

        if (producto.user.toString() !== user._id.toString()) {
            return response.status(401).json({ error: 'No autorizado para eliminar este producto' });
        }

        await ProductosModel.findByIdAndDelete(productoId);
        console.log(productoId)

        user.productos = user.productos.filter(id => id.toString() !== productoId);
        await user.save();
        console.log('Producto eliminado'); // Log de confirmación de eliminación
        return response.status(204).end();
    } catch (error) {
        console.error('Error al eliminar el producto:', error); // Log del error
        return response.status(500).json({ error: 'Ocurrió un error' });
    }
});

module.exports = productosRouter;
