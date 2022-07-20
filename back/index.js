const express = require("express")
const app = express()
var cors = require('cors');

const { MeliManager } = require("./meliManager");

const author = {
    name: 'Facundo',
    lastname: 'Pacheco'
}
let res_base_search = {
    author: author,
    categories: [],
    items : []
}

app.use(cors())

//Endpoint a usar en: Resultado de busqueda
app.route('/api/items')
.get((req, res) => {

    const query = req.query.q
    const infoItems = new Promise((resolve, reject) =>{
        const info = new MeliManager().searchItems(query)
        resolve(info)
    })

    try{
        infoItems
        .then( info =>{
            let _items = []
            info.forEach(i => {
                const item = {
                    id: i.id,
                    title: i.title,
                    price:{
                        currency: i.currency_id,
                        amount: i.price,
                        decimals: 0
                    },
                    picture: i.thumbnail,
                    condition: i.condition,
                    free_shipping: i.shipping.free_shipping
                }
                _items.push(item)
            });
            try{
                const id_category = info[0].category_id
                const categories = new Promise((resolve, reject) =>{
                const info = new MeliManager().getCategories(id_category)
                resolve(info)
            })
            // Asumí que la categorías a mostrar para hacer el breadcrumb 
            //  son las del primer elemento que se trae al hacer la búsqueda.
            categories
                .then(categories =>{
                    let _categories = []
                    categories.forEach( c =>{
                        _categories.push(c.name)
                    })
                    res.json({
                        author: author,
                        categories: _categories,
                        items : _items
                    })
                })
            }
            catch{
                res.json(res_base_search)
            }
        })
    }
    catch{
        res.json(res_base_search)
    }
});

//Endpoint a usar en: Detalle de producto
app.route('/api/items/:id')
.get((req, res)=> {
    const _id = req.params.id
    let _item = {}
    const infoItem = new Promise((resolve, reject) =>{
        const item = new MeliManager().getItem(_id)
        resolve(item)
    })
    const description = new Promise((resolve, reject) =>{
        const desc   = new MeliManager().getItemDescription(_id)
        resolve(desc)
    })
    infoItem
        .then((item) =>{
            _item ={
                id: item.id,
                title: item.title,
                price:{
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 0
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity
            }
            
            description
                .then(desc => {
                    _item.description = desc.plain_text
                    res.json({
                        author: author,
                        item : _item
                    })
                })
        })
        .catch( err => {
            res.json(err)
        })
});

app.listen(8080, () => {
    console.log("El servidor está inicializado en el puerto 8080")
});

