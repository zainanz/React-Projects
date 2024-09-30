import './App.css';
import ProgressBar from './components/progressbar/progressbar';
function App() {
  return (
    <div className="App">
      <ProgressBar url="https://dummyjson.com/products" />
    </div>
  );
}

export default App;
