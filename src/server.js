require("dotenv").config()
require("./db/connection")

const express = require('express');
const port = 5001;

const Book = require("./books/model")
const bookRouter = require("./books/routes")

const app = express()

app.use(express.json())
app.use(bookRouter)

app.get('/health', (req, res) => {
    res.status(201).json({message: "API is working"});
});

// app.post("/books/addBook", async (req, res) => {
//     // const newBook = await Book.create({
//     //     title: req.body.title,
//     //     author: req.body.author,
//     //     genere: req.body.genre
//     // })

//     const newBook = await Book.create(req.body)

//     const successResponse = {
//         message: "Success",
//         newBook: newBook
//     }
//     res.status(201).json(successResponse)
// })

app.get("/home", (req, res) => {
    res.send("<h1> Hello world </h1>")
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.get("*", (req, res) => {
    res.status(404).send("<h1> Error 404 not found </h1>")
})