
import './App.css';
import Title from "./components/Title"
import ItemsList from "./components/ItemsList"


function App() {
  return (
    <div className="App">
      <header>
        <Title />
        <ItemsList />
      </header>
    </div>
  );
}

export default App;
