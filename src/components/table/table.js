import React, { Component } from 'react';
import Table_line from './table_line/table_line';

import './table.css';


class Table extends Component {
  render() {
    return (
        <div className="container__table" id={this.props.mobile_condition}>
            <table> 
                <tbody>
                    <tr className={this.props.mobile_condition}>
                        <td>Min</td>
                        <td>Máx</td>
                    </tr>
                    <Table_line Capital_infos={this.props.Capitals[1]}/>
                    <Table_line Capital_infos={this.props.Capitals[2]}/>
                    <Table_line Capital_infos={this.props.Capitals[3]}/>
                    <Table_line Capital_infos={this.props.Capitals[4]}/>
                    <Table_line Capital_infos={this.props.Capitals[5]}/>
                </tbody>
            </table>
        </div>
    );
  }
}

export default Table;
