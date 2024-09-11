import logo from './logo.svg';
import './App.css';
import PicSlider from './slider/index.js';
function App() {
  return (
    <div className="App">
      <PicSlider url={"https://picsum.photos/v2/list?page=2&limit="} limit={"5"}/>
    </div>
  );
}

export default App;
