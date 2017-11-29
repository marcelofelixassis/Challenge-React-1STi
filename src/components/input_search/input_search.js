import React, { Component } from 'react';
import "./input_search.css";

class Input_search extends Component {
  render() {
    return (
        <div className="custom-search-input">
            <div className="input-group">
                <input type="text" className="form-control input" placeholder="enter here the name of the city" />
                <span className="input-group-btn">
                    <button className="btn" type="button" onClick={function(){alert("asdsad");}}>
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                </span>
            </div>
        </div>
    );
  }
}

export default Input_search;
