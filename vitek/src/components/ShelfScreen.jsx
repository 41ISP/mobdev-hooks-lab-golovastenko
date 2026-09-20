import BookForm from "./BookForm.jsx"
import BookList from "./BookList.jsx"
import FilterChip from "./FilterChip.jsx"

const ShelfScreen = ({books, showOnlyUnread, onToggleFilter, onAdd, onDelete, onToggleRead,}) => {
    
  const visibleBooks = showOnlyUnread
    ? books.filter((book) => !book.read)
    : books

  return (
    <section className="screen active">
      <p className="greeting">Добрый вечер</p>
      <BookForm onAdd={onAdd} />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip checked={showOnlyUnread} onChange={onToggleFilter} />
      </div>
      <BookList
        books={visibleBooks}
        onToggleRead={onToggleRead}
        onDelete={onDelete}
      />
    </section>
  )
}

export default ShelfScreen