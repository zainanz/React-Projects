import './App.css';
// import ProgressBar from './components/progressbar/progressbar';
// import Popup from './components/popup/popup';
import GithubProfile from './components/githubprofile/githubprofile';
function App() {
  return (
    <div className="App">
      {/* <ProgressBar url="https://dummyjson.com/products" /> */}
      {/* <Popup btnContent='Display' backgroundColor='blue' content="This is a popup"/> */}
      <GithubProfile/>
    </div>
  );
}

export default App;
