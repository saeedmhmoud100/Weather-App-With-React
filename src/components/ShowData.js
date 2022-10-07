import React from "react";

const ShowData = props => {
  return (
    <div className="data">

      <div className="list">
        <div className="item">
          Country : <span>{props.state.country}</span>
        </div>
        <div className="item">
          City : <span>{props.state.city}</span>
        </div>
        <div className="item">
          Last Updated : <span>{props.state.last_updated}</span>
        </div>
        <div className="item">
          Temperature °C : <span>{props.state.temp_c}</span>
        </div>
        <div className="item">
          Humidity : <span>{props.state.humidity}</span>
        </div>
        <div className="item">
          Weather State : <span>{props.state.text}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
