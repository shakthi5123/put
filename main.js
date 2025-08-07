
//Basic Express.js server setup for handling PUT requests
// import express from "express";
// const app = express()
// const port = 3000

// app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Welcome to the PUT example!")
// })

// app.put("/users/:id", (req, res) => {
//     const userId = req.params.id
//     res.send(`User ${userId} updated with data: ${JSON.stringify(req.body)}`)
// })


// app.listen(port, ()=> {
//     console.log(`Server is running on http://localhost:${port}`)
// })

// challenge-1 with put requests

// import express from "express";

// const app = express()
// const port = 3000;

// app.use(express.json());

// app.put("/profile/:username", (req, res) => {
//     const username = req.params.username;
//     const userData = req.body
//     res.send(`Profile of user ${username} updated with : ${JSON.stringify(userData)}`)
// })


// app.listen(port, ()=> {
//     console.log(`Server is running on http://localhost:${port}`);
// })

// challenge-2 with put requests

import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.put("/products/:id", (req, res) => {
    const productsId = req.params.id;
    const productsData = req.body;
    res.send(`Product with ID ${productsId} updated with: ${JSON.stringify(productsData)} `)
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})