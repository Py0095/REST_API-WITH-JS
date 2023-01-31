import express from "express";
import Authentification from "./authentification.js";
import all_products from "./producs.js";

const app = express();
app.use((req, res, next) => {
    const origin = req.headers.origin
    if (origin === 'http://localhost:8000' || origin ==='http://localhost:9007')
        res.set("Access-Control-Allow-Origin",origin); 
    else
        return send(401)

    res.set(
        "Access-Control-Methods",
        "GET",
        // "POST",
        // "OPTIONS",
        // "PUT",
        // "PATCH",
        // "DELETE"
    );
    next();
});

app.get("/", (req, res) => {
    return res.send("Welcome to my products api!");
});

app.get("/products",Authentification, (req, res) => {
    return res.send(200, all_products);
});

app.get("/products/:id",Authentification, (req, res) => {
    const id = parseInt(req.params.id);
    const products_id = all_products.filter((product) => product.id === id);
    return res.send(200, products_id);
});

app.get("/products/brands",Authentification, (req, res) => {
    const products_brands = all_products.map((el) => el.brand);
    res.send(200, products_brands);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
