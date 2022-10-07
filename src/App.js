import "./App.css";
import Form from "./components/Form";
import ShowData from "./components/ShowData";
import { Component } from "react";

const API_KEY = "3e5ffc95afa94dd59f1213920220610";
const WEB_LINK = "http://api.weatherapi.com/v1/current.json";

class App extends Component {
  state = {
    country: "",
    city: "",
    region: "",
    last_updated: "",
    temp_c: 0,
    humidity: 0,
    text: "",
    error: "",
  };

  async SetData(e) {
    e.preventDefault();
    /*=============== 1 ============== */
    if (e.target.country) {
      let api_data = await fetch(
        `${WEB_LINK}?key=${API_KEY}&q=${e.target.country.value}&aqi=no`
      );
      let data = await api_data.json();
      if (data.error) {
        this.setState({
          country: "",
          city: "",
          region: "",
          last_updated: 0,
          temp_c: 0,
          humidity: "",
          text: "",
          error: data.error.message,
        });
      } else {
        this.setState({
          country: data.location.country,
          city: data.location.name,
          region: data.location.region,
          last_updated: data.current.last_updated,
          temp_c: data.current.temp_c,
          humidity: data.current.humidity,
          text: data.current.condition.text,
          error: "",
        });
      }
    }
    /*=============== 1 ============== */

    /*=============== 2 ============== */

    // if (e.target.country) {
    //   fetch(`${WEB_LINK}?key=${API_KEY}&q=${e.target.country.value}&aqi=no`)
    //     .then(r => r.json())
    //     .then(data => {
    //       // console.clear();
    //       if (data.error) {
    //         this.setState({
    //           country: "",
    //           city: "",
    //           region: "",
    //           last_updated: 0,
    //           temp_c: 0,
    //           humidity: "",
    //           text: "",
    //           error: data.error.message,
    //         });
    //       } else {
    //         this.setState({
    //           country: data.location.country,
    //           city: data.location.name,
    //           region: data.location.region,
    //           last_updated: data.current.last_updated,
    //           temp_c: data.current.temp_c,
    //           humidity: data.current.humidity,
    //           text: data.current.condition.text,
    //           error: "",
    //         });
    //       }
    //     });
    // }
    /*=============== 2 ============== */
  }

  render() {
    return (
      <div className="App">
        <div className="backimg">
          <div className="overlay" />
        </div>
        <div className="container">
          <Form onSubmit={this.SetData.bind(this)} />
          <ShowData state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;