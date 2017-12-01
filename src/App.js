import React, { Component } from 'react';

import './App.css';
import './media.css';

import Title from './components/title/title';
import Input_search from './components/input_search/input_search';
import Table from './components/table/table';

const table_left_obj = {1:{capital: "Alabama",initial: "al"},2:{capital: "Alasca",initial: "ak"},3:{capital: "Arizona",initial: "az"},4:{capital: "Cansas",initial: "ks"},5:{capital: "Delaware",initial: "de"}};
const table_right_obj = {1:{capital: "Nebrasca",initial: "ne"},2:{capital: "Nevada",initial: "nv"},3:{capital: "Nova iorque",initial: "ny"},4:{capital: "Texas",initial: "tx"},5:{capital: "Washington",initial: "wa"}};

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
            <Table Capitals={table_left_obj}/>
            <Table Capitals={table_right_obj} mobile_condition="min_max_hidden"/>
          </div>
        </div>

        <footer></footer>
      </div>
    );
  }
}

export default App;
