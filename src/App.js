import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./API/unsplash";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainboard />
    </div>
  );
}

export default App;
