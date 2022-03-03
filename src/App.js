
import './App.css';
import Title from "./components/Title"
import ItemsList from "./components/ItemsList"
import Categories from './components/Categories';
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Title />
        </header>
        <main>
        <Categories />
        
        <Routes>
          <Route path="/" element={<ItemsList />}></Route>
          <Route path="/categories/:category/items" element={<ItemsList />}></Route>
        </Routes>
     
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
