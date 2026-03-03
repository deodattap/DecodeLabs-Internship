const express = require("express");

const app = express();
const PORT = 5000;
app.use(express.json());

let products = [
    { id: 1, name: "Lipstick", price: 350 },
    { id: 2, name: "Powder", price: 420 },
    { id: 3, name: "Sunscreen", price: 480 }
];

app.get("/", (req, res) => {
    res.send("Backend API is running");
});

// GET products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// POST product
app.post("/products", (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: "Name and price required" });
    }

    if (price <= 0) {
        return res.status(400).json({ message: "Price must be positive" });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});