import "./App.css";
import LandingPage from "./landingpage/landingpage";
function App() {
  return (
    <section
      className="flex"
      style={{
        backgroundImage: 'url("./background.svg")',
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <LandingPage />
    </section>
  );
}

export default App;
