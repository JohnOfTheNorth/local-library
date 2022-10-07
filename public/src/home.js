function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedCount = books.filter(
    (book) =>
      book.borrows.filter((count) => count.returned === false).length > 0
  );
  return borrowedCount.length;
}

function getMostCommonGenres(books) {
  const commonGenres = {};
  books.forEach((num) => {
    if (commonGenres[num.genre]) {
      commonGenres[num.genre]++;
    } else {
      commonGenres[num.genre] = 1;
    }
  });
  return Object.entries(commonGenres)
    .map(([name, count]) => {
      return {
        name,
        count,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach((author) => {
    const popularAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        popularAuthor.count += book.borrows.length;
      }
    });
    result.push(popularAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
