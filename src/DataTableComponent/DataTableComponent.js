import React, { Component } from 'react';
import dataTable from 'datatables';
import axios from 'axios';
import $ from "jquery";

class NewTable extends Component {

    state = {
        data: []
    }

    loadData = () => {
        axios.get('http://www.json-generator.com/api/json/get/cfSBuJGEOa?indent=2')
            .then(response => {
               this.setState({ data: response.data });
              console.log(this.state.data);
            });
           
    }

    componentWillMount() {
        this.loadData();
    }
    componentDidMount = () => {
        var self = this;
        $('#mytable').dataTable({
            //"sPaginationType": "bootstrap",
            "bAutoWidth": false,
            "bDestroy": true,
            "fnDrawCallback": function () {
                self.forceUpdate();
            },
        });
    }
    componentDidUpdate = () => {
        $('#mytable').dataTable({
            //"sPaginationType": "bootstrap",
            "bAutoWidth": false,
            "bDestroy": true,
        });
    }
    render() {

        return (
            <div className="table-responsive">
                <table>
                <thead>
                    <tr className="sepr">
                        {this.state.data.map((item, i) => (
                            <th className="bx" key={i}>{Object.keys(item)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {this.state.data.map((item,i) => (
                            <tr key={i} className="bx" >
                            <td style={{color:'#333'}}>{Object.values(item.company)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.address)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.name)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.email)}</td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default NewTable;