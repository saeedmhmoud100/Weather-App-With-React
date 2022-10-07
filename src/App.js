import "./App.css";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {
  return (
    <div className="App">
      <div className="backimg">
        <div className="overlay" />
      </div>
      <div className="container">
        <Form />
        <ShowData />
      </div>
    </div>
  );
}

export default App;
