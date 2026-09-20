import { useState } from "react"

const BookForm = ({ onAdd }) => {
  const [bookField, setBookField] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = bookField.trim()
    if (trimmed.length === 0) return
    onAdd(trimmed)
    setBookField("")
  }

  return (
    <form onSubmit={handleSubmit} className="add-book-row">
      <input
        className="input"
        value={bookField}
        onChange={(e) => setBookField(e.target.value)}
        placeholder="Название книги..."
      />
      <button className="btn" type="submit">
        Добавить на полку
      </button>
    </form>
  )
}

export default BookForm