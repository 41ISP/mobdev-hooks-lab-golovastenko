import BookList from "./BookList.jsx"
import BookForm from "./BookForm.jsx"
import FilterChip from "./FilterChip.jsx"

const ShelfScreen = () => {
    return (
        <section className="screen active" id="screen-shelf">
          <p className="greeting">Добрый вечер</p>
           <BookForm />
          <div className="list-toolbar">
            <span className="toolbar-title">Книги</span>
             <FilterChip />
          </div>
            <BookList />
        </section>
    )
}

export default ShelfScreen