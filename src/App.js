import "./App.css";
// import headerImage from "./headerImage.png";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <img className="header-image img-fluid m-2" src={headerImage} /> */}
        <DictionarySearch />
      </div>
    </div>
  );
}

export default App;
