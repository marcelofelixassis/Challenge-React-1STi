import React, { Component } from 'react';
import "./day.css";

class Day extends Component {
  render() {
    return (
        <div className="day">
          <div className="day__name">
          {this.props.name} 
          </div>
          <div className="day__minmax">
            18º 26º
          </div>
        </div>
    );
  }
}

export default Day;
