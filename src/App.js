import "./App.css";
import Form from "./components/Form";
import ShowData from "./components/ShowData";
import { Component } from "react";
import axios from "axios";
const API_KEY = "dd44ec9e66da4e2789d104708230304";
const WEB_LINK = "https://api.weatherapi.com/v1/current.json";

class App extends Component {
  state = {
    country: "",
    city: "",
    region: "",
    last_updated: "",
    temp_c: 0,
    humidity: 0,
    text: "",
    error: ""
  };

  SetData(e) {
    e.preventDefault();
    /*=============== 1 ============== */
    // if (e.target.country) {
    //   let api_data = await fetch(
    //     `${WEB_LINK}?key=${API_KEY}&q=${e.target.country.value}&aqi=no`
    //   );
    //   let data = await api_data.json();
    //   if (data.error) {
    //     this.setState({
    //       country: "",
    //       city: "",
    //       region: "",
    //       last_updated: 0,
    //       temp_c: 0,
    //       humidity: "",
    //       text: "",
    //       error: data.error.message
    //     });
    //   } else {
    //     this.setState({
    //       country: data.location.country,
    //       city: data.location.name,
    //       region: data.location.region,
    //       last_updated: data.current.last_updated,
    //       temp_c: data.current.temp_c,
    //       humidity: data.current.humidity,
    //       text: data.current.condition.text,
    //       error: ""
    //     });
    //   }
    // }
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

    /*=============== 3 ============== */
    if (e.target.country.value) {
      axios
        .get(`${WEB_LINK}?key=${API_KEY}&q=${e.target.country.value}&aqi=no`)
        .then(res => {
          let data = res.data;
          this.setState({
            country: data.location.country,
            city: data.location.name,
            region: data.location.region,
            last_updated: data.current.last_updated,
            temp_c: data.current.temp_c,
            humidity: data.current.humidity,
            text: data.current.condition.text,
            error: ""
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            country: "",
            city: "",
            region: "",
            last_updated: 0,
            temp_c: 0,
            humidity: "",
            text: "",
            error: error.response.data.error.message
          });
        });
    }
    /*=============== 3 ============== */
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
