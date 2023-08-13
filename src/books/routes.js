const {Router} = require("express")
const bookRouter = Router()
const {addBook, getAllBooks, deleteBook, deleteAll, updateOne, findOneBook} = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getBooks", getAllBooks)
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.delete("/books/deleteAllBooks", deleteAll)
bookRouter.put("/books/updateAuthor", updateOne)
bookRouter.get("/books/findABook", findOneBook)

module.exports = bookRouter