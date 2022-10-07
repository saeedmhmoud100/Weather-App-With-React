import React, { Component } from "react";

class ShowData extends Component {
  render() {
    return (
      <div className="data">
        <div className="list">
          <div className="item">
            country : <span />
          </div>
          <div className="item">
            last_updated : <span />
          </div>
          <div className="item">
            temp_c : <span />
          </div>
          <div className="item">
            humidity : <span />
          </div>
          <div className="item">
            weather state : <span />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowData;
