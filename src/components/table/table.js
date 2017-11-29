import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
        <div className="container__table">
            <table>
                <tbody>
                    <tr>
                        <td>Min</td>
                        <td>Máx</td>
                    </tr>
                    <tr>
                        <th>20º</th>
                        <th>31º</th>
                        <th>Capital</th>
                    </tr>
                    <tr>
                        <th>20º</th>
                        <th>31º</th>
                        <th>Capital</th>
                    </tr>
                    <tr>
                        <th>20º</th>
                        <th>31º</th>
                        <th>Capital</th>
                    </tr>
                    <tr>
                        <th>20º</th>
                        <th>31º</th>
                        <th>Capital</th>
                    </tr>
                    <tr>
                        <th>20º</th>
                        <th>31º</th>
                        <th>Capital</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default Table;
