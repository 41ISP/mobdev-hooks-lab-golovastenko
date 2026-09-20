const BookItem = ({ book, onToggleRead, onDelete }) => {
    const { id, title, read } = book
    const hash = id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
    const coverColor = `hsl(${hash % 360}, 40%, 45%)`

  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: coverColor }} />
      <div className="book-info">
        <p className={"book-title" + (read ? " done" : "")}>{title}</p>
      </div>
      <div
        className={"read-check" + (read ? " checked" : "")}
        onClick={() => onToggleRead(id)}
        role="button"
      >
        <span className="check-circle">{read ? "✓" : ""}</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
        title="Убрать с полки"
      >
        ✕
      </button>
    </div>
  )
}

export default BookItem