import ShelfScreen from "./components/ShelfScreen.jsx"

const App = () => {
  return (
      <div className="app">
        <div className="app-header">
          <div className="brand">
            <div className="brand-mark">S</div>
            <div className="brand-name">Shelf</div>
          </div>
        </div>
          <ShelfScreen />
      </div>
  )
}
export default App
