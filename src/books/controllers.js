const Book = require("./model");

const addBook = async (req, res) => {

    try {
  // const newBook = await Book.create({
  // title: req.body.title,
  // author: req.body.author,
  // genere: req.body.genre
  //  })

    console.log(req.body)
  const newBook = await Book.create(req.body);
  const successResponse = {
    message: "Success",
    newBook: newBook,
  };
  res.status(201).json(successResponse);
} catch (error) {
    const errorResponse = {
        message: "Error",
        error: error
    }
    res.status(501).json(errorResponse)
}
};

const getAllBooks = async (req, res) => {

  try {

const allBooks = await Book.find({});
const successResponse = {
  message: "Success",
  getBook: allBooks,
};
res.status(201).json(successResponse);
} catch (error) {
  const errorResponse = {
      message: "Error",
      error: error
  }
  res.status(501).json(errorResponse)
}
};

const deleteBook = async (req, res) => {

  try {

const deleteABook = await Book.delete({title: req.body});
const successResponse = {
  message: "Success",
  deleteABook: deleteABook,
};
res.status(201).json(successResponse);
} catch (error) {
  const errorResponse = {
      message: "Error",
      error: error
  }
  res.status(501).json(errorResponse)
}
};

const deleteAll = async (req, res) => {

  try {

const deleteAllBooks = await Book.deleteAll({});
const successResponse = {
  message: "Success",
  deleteAllBooks: deleteAllBooks,
};
res.status(201).json(successResponse);
} catch (error) {
  const errorResponse = {
      message: "Error",
      error: error
  }
  res.status(501).json(errorResponse)
}
};

const updateOne = async (req, res) => {

  try {

    const filter = {title: "Harry Potter"}
    const update = {author: "Someone else"}
    const updateAuthor = await Book.findOneAndUpdate(filter, update);

// const updateAuthor = await Book.updateOne({title: "Harry Potter"}, {$set: {author: "JK Rowling"}}); // currently no author
const successResponse = {
  message: "Success",
  updateAuthor: updateAuthor,
};
res.status(201).json(successResponse);
} catch (error) {
  const errorResponse = {
      message: "Error",
      error: error
  }
  res.status(501).json(errorResponse)
}
};

const findOneBook = async (req, res) => {

  try {

const findOne = await Book.findOne({title: "Harry Potter"})
const successResponse = {
  message: "Success",
  findOne: findOne,
};
res.status(201).json(successResponse);
} catch (error) {
  const errorResponse = {
      message: "Error",
      error: error
  }
  res.status(501).json(errorResponse)
}
};


module.exports = {
    addBook,
    getAllBooks,
    deleteBook,
    deleteAll,
    updateOne,
    findOneBook
}