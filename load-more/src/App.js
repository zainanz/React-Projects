import logo from './logo.svg';
import './App.css';
import Cards from "./components/cards-renderer/cards"
function App() {
  return (
    <div className="App">
      <Cards url={'https://dummyjson.com/products?limit='} initialLimit={2} />
    </div>
  );
}

export default App;
