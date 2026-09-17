import { useState } from "react"
import BookItem from "./BookItem.jsx"

const BookList = () => {
    const [shownBooks, setShownBooks] = useState([])
    return (
        <div className="book-list" id="bookList">
            <BookForm setBooks={setShownBooks} /> {/* Передаем функцию для обновления книги */}
            {books.map((book) => (
                <BookItem title={book.title} key={book.id} />
            ))}
        </div>
    );
}

export default BookList