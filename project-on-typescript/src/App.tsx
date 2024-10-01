import './App.css';
import ProgressBar from './components/progressbar/progressbar';
import Popup from './components/popup/popup';
function App() {
  return (
    <div className="App">
      {/* <ProgressBar url="https://dummyjson.com/products" /> */}
      <Popup btnContent='Display' backgroundColor='blue' content="This is a popup"/>
    </div>
  );
}

export default App;
