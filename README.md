# BeautyShop E-Commerce

## Description

This project is a simple full stack e-commerce cart application created during the DecodeLabs Internship.

It includes a responsive frontend interface and a backend API connected with a PostgreSQL database.  
The frontend shows beauty products and a shopping cart layout, while the backend provides APIs to fetch and add products.

---

# Technologies Used

Frontend  
HTML  
CSS  
JavaScript  

Backend  
Node.js  
Express.js  

Database  
PostgreSQL  

Tools  
Git  
GitHub  
Postman  

---

# Project Structure

decodelabs  

project-1-responsive-ui  
Frontend UI built using HTML, CSS and JavaScript  

project-2-backend-api  
Backend API built using Node.js and Express connected with PostgreSQL database  

---

# Task 1 — Responsive UI (Frontend)

In this task a responsive e-commerce cart interface was created using HTML, CSS and JavaScript.

The page contains:

- Navigation bar
- Product cart layout
- Quantity increase and decrease buttons
- Order summary section
- Footer section
- Responsive layout for mobile and tablet

### How to Check Task 1

Step 1  

Open the project folder.

Step 2  

Open the folder named:

project-1-responsive-ui

Step 3  

Open the file:

index.html

Step 4  

The BeautyShop UI will open in the browser.

You should see:

- BeautyShop navigation bar  
- Shopping cart items  
- Quantity + and - buttons  
- Order summary section  

If the UI loads correctly then **Task 1 is working**.

---

# Task 2 — Backend API (Node.js + Express)

In this task a backend API was created using Node.js and Express.

The backend provides APIs to:

- Get all products
- Add a new product

The backend runs on:

http://localhost:5000

---

## How to Run the Backend

Step 1  

Open terminal.

Step 2  

Go to the backend folder.

```
cd project-2-backend-api
```

Step 3  

Start the server.

```
node server.js
```

Step 4  

If the server starts successfully you will see:

Server running at http://localhost:5000

---

## How to Test GET API

Step 1  

Open browser.

Step 2  

Paste this URL:

```
http://localhost:5000/products
```

Step 3  

You should see product data like this:

```
[
 {"id":1,"name":"Lipstick","price":350},
 {"id":2,"name":"Powder","price":420},
 {"id":3,"name":"Sunscreen","price":480}
]
```

This means the backend API is working.

---

## How to Test POST API (Add Product)

Step 1  

Open **Postman**.

Step 2  

Select method:

POST

Step 3  

Paste this URL:

```
http://localhost:5000/products
```

Step 4  

Go to:

Body → raw → JSON

Step 5  

Paste this data:

```
{
"name":"Foundation",
"price":550
}
```

Step 6  

Click **Send**

Step 7  

You will see response like:

```
{
"id":4,
"name":"Foundation",
"price":550
}
```

Step 8  

Now open browser again and check:

```
http://localhost:5000/products
```

You will see the new product added.

If the product appears, then **Task 2 is working**.

---

# Task 3 — PostgreSQL Database Integration

In this task the backend API was connected to a PostgreSQL database so that product data is stored in the database instead of temporary memory.

The backend uses the **pg library** to connect Node.js with PostgreSQL.

Products are stored in a table named:

products

---

## How to Check Database Data

Step 1  

Open terminal.

Step 2  

Start PostgreSQL.

Step 3  

Open PostgreSQL CLI.

```
psql -U postgres
```

Step 4  

Connect to the database.

```
\c beautyshop
```

Step 5  

Check the products table.

```
SELECT * FROM products;
```

Step 6  

You should see product records stored in the database.

Example:

```
 id |   name      | price
----|-------------|------
 1  | Lipstick    | 350
 2  | Powder      | 420
 3  | Sunscreen   | 480
```

This confirms that the backend is successfully connected to PostgreSQL.

---

# Author
Deodatta Pagar  
DecodeLabs Internship Project