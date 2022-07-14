const express = require("express")
const app = express()

let respuesta = {
    author: {
        name: 'Facundo',
        lastname: 'Pacheco'
    }
   };
//Endpoint a usar en: Resultado de busqueda
app.route('/api/items')
.get((req, res) => {
    res.send(req.query.q)
});

//Endpoint a usar en: Detalle de producto
app.route('/api/items/:id')
.get((req, res)=> {
    const id = req.params.id
    
    res.send(id)
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000")
});

