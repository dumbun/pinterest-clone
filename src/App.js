import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./API/unsplash";
import { useState } from "react";

function App() {
  const [pins, setNewPins] = useState([]);
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let result = res.data.results;
      let newPins = [...result, ...pins];
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = ["cars", "anime", "cats", "dogs", "bali", "tokyo"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useState(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
      <footer>K Vamshi Krishna @ dumbun.xyz</footer>
    </div>
  );
}

export default App;
