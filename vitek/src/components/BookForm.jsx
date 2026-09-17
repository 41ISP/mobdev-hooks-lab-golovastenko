import { useState } from "react"
import { nanoid } from "nanoid"

const BookForm = ({setBooks}) => {
  const [bookField, setBookField] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookField.trim().length === 0 || bookField.trim().length > 15) return
    const newBook = {
      id: nanoid(),
      title: bookField.trim(),
    }
    setBooks(prevBooks => [...prevBooks, newBook]);
    setBookField("");
  }


  return (
      <form onSubmit={handleSubmit} className="add-book-row">
        <input
          className="input"
          id="bookInput"
          value={bookField}
          onChange={(e) => setBookField(e.target.value)}
          placeholder="Название книги..."
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </form>
  )
}

export default BookForm