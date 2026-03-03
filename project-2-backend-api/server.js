const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

let products = [
  { id: 1, name: "Lipstick", price: 350 },
  { id: 2, name: "Powder", price: 420 },
  { id: 3, name: "Sunscreen", price: 480 }
]

app.get("/", (req, res) => {
  res.send("Backend API is running")
})

app.get("/products", (req, res) => {
  res.status(200).json(products)
})

app.post("/products", (req, res) => {

  const name = req.body.name
  const price = req.body.price

  if(!name || !price){
    return res.status(400).json({ message: "Name and price required" })
  }

  if(price <= 0){
    return res.status(400).json({ message: "Price must be positive" })
  }

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price
  }

  products.push(newProduct)

  res.status(201).json(newProduct)
})

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT)
})