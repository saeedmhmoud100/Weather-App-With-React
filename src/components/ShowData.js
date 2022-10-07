import React from "react";

const ShowData = props => {
  return (
    <div
      className="data"
      style={props.state.error ? { borderRadius: "13px" } : {}}
    >
      {props.state.error
        ? <div className="error">
            {props.state.error}
          </div>
        : <div className="list">
            <div className="item">
              Country : <span>{props.state.country}</span>
            </div>
            <div className="item">
              City : <span>{props.state.city}</span>
            </div>
            <div className="item">
              Region : <span>{props.state.region}</span>
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
          </div>}
    </div>
  );
};

export default ShowData;
