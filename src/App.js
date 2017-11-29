import React, { Component } from 'react';
import './App.css';
import Title from './components/title/title';
import Input_search from './components/input_search/input_search';
import Table from './components/table/table';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container" id="first__container">
          <Title />
      
          <div className="container__input_search">
            <Input_search />
          </div>
          
        </div>

        <div className="container__hr">
          <hr></hr>
        </div>

        <div className="container">
          <div className="container__capitals">
          <div className="capitals__title">Capitals</div>
            <Table />
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
