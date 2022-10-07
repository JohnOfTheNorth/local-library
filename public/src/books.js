function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id);
  return findAuthor;
}

function findBookById(books, id) {
  const findBooks = books.find((book) => book.id === id);
  return findBooks;
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((borrowed) =>
    borrowed.borrows.every((borrow) => borrow.returned === true)
  );
  const unReturned = books.filter((borrowed) =>
    borrowed.borrows.some((borrow) => borrow.returned === false)
  );
  const bookStatus = [[...unReturned], [...returned]];
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      const account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
