import { useState } from "react"
import { nanoid } from "nanoid"
import ShelfScreen from "./components/ShelfScreen.jsx"

const App = () => {
  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  const handleAddBook = (title) => {
    const newBook = {
      id: nanoid(),
      title,
      read: false,
    }
    setBooks((prevBooks) => [...prevBooks, newBook])
  }

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
  }

  const handleToggleRead = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    )
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>
      <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onToggleFilter={() => setShowOnlyUnread((prev) => !prev)}
        onAdd={handleAddBook}
        onDelete={handleDeleteBook}
        onToggleRead={handleToggleRead}
      />
    </div>
  )
}

export default App