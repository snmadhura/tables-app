import React, { Component } from 'react';
import axios from 'axios';
import inArray from 'in-array';

class TableComponent extends Component {
    state = {
        tableHead: [],
        tableData: []
    }

    render() {
        axios.get('http://www.json-generator.com/api/json/get/cfSBuJGEOa?indent=2')
            .then(response => {
                //console.log(response.data);
                const keyName = [];
                const datavalue = [];
                response.data.map((groupItem, key) => {
                    return (
                        Object.keys(groupItem).map((item) => {
                            if (!(inArray(keyName, item))) {
                                keyName.push(item);
                            }

                        })

                    )
                });

                response.data.map((data, i) => {
                    datavalue.push(data);
                })
                //console.log(datavalue);
                this.setState({ tableHead: keyName, tableData: datavalue });
            });
        return (
            <table>
                <thead>
                    <tr>
                        {this.state.tableHead.map((item, i) => (
                            <th key={i}>{Object.values(item)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {this.state.tableData.map((item,i) => (
                            <tr key={i}>
                            <td style={{color:'#333'}}>{Object.values(item.email)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.company)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.address)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.name)}</td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        );
    }
}

export default TableComponent;