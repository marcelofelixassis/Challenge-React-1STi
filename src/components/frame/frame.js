import React, { Component } from 'react';
import "./frame.css";
import Day from "./day/day";

class Frame extends Component {
  render() {
    return (
        <div className="frame">
            <div className="container__frame">
                <div className="frame__location">
                    Niteroi, RJ - Brasil
                </div>

                <div className="frame__climate">
                    20ºC Nublado
                </div>

                <div className="frame__maxmin__sensation">
                    <i className="glyphicon glyphicon-arrow-down" id="min"></i>16º
                    <i className="glyphicon glyphicon-arrow-up" id="max"></i>25º  
                    <text className="text__sensation">Sensação</text>19ºC
                </div>

                <div className="frame__wind__humidity">
                    <text className="text__wind">Vento</text>18km/h
                    <text className="text__humidity">Humidade</text> 89%
                </div>

                
                

            </div>

            <hr className="frame__hr"/>
            <div className="container__frame_two">

            <Day name="Sunday"/>
            <Day name="Monday"/>
            <Day name="Tuesday"/>
            <Day name="Wednesday"/>
            <Day name="Thursday"/>

            </div>                
          
                   
                
           
        </div>
    );
  }
}

export default Frame;
