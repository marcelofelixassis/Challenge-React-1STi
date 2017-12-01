import React, { Component } from 'react';
import Service from '../../../utils/service/service';

class Table_line extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            min: 0,
            max: 0
        };
 
    }

    componentDidMount(){
        Service.get_max_min(this.props.Capital_infos.capital, this.props.Capital_infos.initial).then(function (response) {
            this.setState({
                min: response.low,
                max: response.high
            })
        }.bind(this));
    }

    render() {   
    return (
        <tr>
            <th>{this.state.min}º</th>
            <th>{this.state.max}º</th>
            <th>{this.props.Capital_infos.capital}</th>
        </tr>
    );
  }
}

export default Table_line;
