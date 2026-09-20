import BookItem from "./BookItem.jsx"

const BookList = ({ books, onToggleRead, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default BookList