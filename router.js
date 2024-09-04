const express = require('express')
const router = express.Router()


var products = []

// Mostrar products 
router.get('/', (req, res)=>{
    res.status(200).json(products)
})


// Agregar producto 
router.post('/agregar', (req, res)=>{

    console.log("Cuerpo de petición: ", req.body)
    const {name, price, quantity } = req.body
    const product = {name, price, quantity }
    product.id = products.length + 1
    products.push(product)
    res.status(200).json("Product save!")
})

// Consultar
router.get('/products/:id', (req, res)=>{
    console.log("Id: ", req.params.id)
    const product = products.find(t => t.id == req.params.id)
    if(product)
        res.status(200).json({product: product})
    else
        res.status(400).json({mensaje: "Product no encontrada"})
})

// Modificar producto
router.put('/products/:id', (req, res)=> {
    const product = products.find((t) => t.id == req.params.id);

    if(product){
        const { name, price, quantity } = req.body
        product.name = name;
        product.price = price;
        product.quantity = quantity;

        res.status(200).json({message: 'Product actually'})
    }
    else{
        res.status(400).send('Product is null')
    }
})

// Eliminar producto
router.delete('/products/:id', (req, res) =>{
    var product = products.find((t) => t.id == req.params.id);

    if(product){
       product = products.filter(t => t.id != product.id);
        res.status(200).json({message: 'Product deleted'})
    }
    else{
        res.status(400).send('Producto is null')
    }
})

module.exports = router