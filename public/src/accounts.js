function findAccountById(accounts, id) {
  const matchAcc = accounts.find((ident) => ident.id === id);
  return matchAcc;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastName1, lastName2) =>
    lastName1.name.last > lastName2.name.last ? 1 : -1
  );
  return accounts;
}

//helper function
function getIndividualBorrows(account, books) {
  const id = account.id;
  let result = 0;
  books.forEach((book) => {
    const borrows = book.borrows;
    borrows.forEach((borrow) => {
      if (borrow.id == id) {
        result++;
      }
    });
  });
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  const result = getIndividualBorrows(account, books);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksArray = [];
  const accountId = account.id;
  books.forEach((book) => {
    const borrows = book.borrows;
    if (borrows.find((borrow) => borrow.id === accountId && !borrow.returned)) {
      booksArray.push(book);
    }
  });
  booksArray.forEach((book) => {
    const author = authors.find((person) => person.id === book.authorId);
    book["author"] = author;
  });
  return booksArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
