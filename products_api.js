import express from 'express'
// import Authentification from "./authentification.js";
import all_products from "./producs.js";

const app = express();


app.get("/", (req, res) => {
    return res.send("Welcome to my products api!");
});

app.get("/products", (req, res) => {
    return res.send(200,all_products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const products_id = all_products.filter(product => product.id === id);
    return res.send(200, products_id);
});

app.get('/products/brands',(req, res) => {
    return res.send('brands products')
})
// app.get("/products/brands",(req, res) => {
//   const products_brands =  all_products.forEach(el => {
//     element.brand
// });
//     return res.send(400);
// });

app.listen(3001);
