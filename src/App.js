
import './App.css';
import Title from "./components/Title";
import Nav from './components/Nav';
import Users from './components/Users';
import ItemsList from "./components/ItemsList";
import Categories from './components/Categories';
import {Routes, Route} from "react-router-dom";
import {UserContext} from "./contexts/UserContexts";
import {useState} from "react";


function App() {
  const [loggedInUser, setLoggedInUser] = useState ({
    username: "Paul-R",
    avatar_url: "https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg",
    kudos:0
  });
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <div className="App">
      <header>
        <Title />
        </header>
        <main>
        <Nav />
        <Categories />
        <Routes>
          <Route path="/" element={<ItemsList />}></Route>
          <Route path="/users" element={<Users />} />
          <Route path="/categories/:category/items" element={<ItemsList />}></Route>
        </Routes>
        </main>
    </div>
    </UserContext.Provider>
  );
}

export default App;
