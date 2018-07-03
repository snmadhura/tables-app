import React, { Component } from 'react';
import axios from 'axios';
import inArray from 'in-array';
import './TableComponent.css';

class TableComponent extends Component {

    state = { 
        tableHead : [],
        tableData : []
    }

    // componentWillMount() {
    //    let state = {
    //         tableHead: [
    //             {
    //                 "company": "MOBILDATA",
    //                 "address": "Ironton, Marshall Islands",
    //                 "name": "Sargent",
    //                 "email": "sargentvega@mobildata.com",
    //                 "some": "something"
    //             },
    //             {
    //                 "company": "XUMONK",
    //                 "address": "Ilchester, Maine",
    //                 "name": "Martinez",
    //                 "email": "martinezvega@xumonk.com",
    //                 "some": "something"
    //             },
    //             {
    //                 "company": "MEDIOT",
    //                 "address": "Berwind, California",
    //                 "name": "Harrison",
    //                 "email": "harrisonvega@mediot.com",
    //                 "some": "something"
    //             },
    //             {
    //                 "company": "SNOWPOKE",
    //                 "address": "Brenton, Montana",
    //                 "name": "Rush",
    //                 "email": "rushvega@snowpoke.com",
    //                 "some": "something"
    //             }
    //         ],
    //         tableData: []
    //     }

    //     let keyName = state.tableHead;
    //     const datavalue = [];
    //     keyName.map((groupItem, key) => {
    //         return (
    //             Object.keys(groupItem).map((item) => {
    //                 if (!(inArray(keyName, item))) {
    //                     keyName.push(item);
    //                 }

    //             })

    //         )
    //     });
    //     this.setState({ tableHead: keyName, tableData: datavalue });

    // }
    render() {

        axios.get('http://www.json-generator.com/api/json/get/cfSBuJGEOa?indent=2')
            .then(response => {
                //console.log(response.data);
                let keyName = [];
                // const datavalue = [];
                // let temp = [
                //     {
                //         "company": "MOBILDATA",
                //         "address": "Ironton, Marshall Islands",
                //         "name": "Sargent",
                //         "email": "sargentvega@mobildata.com",
                //         "some": "something"
                //     },
                //     {
                //         "company": "XUMONK",
                //         "address": "Ilchester, Maine",
                //         "name": "Martinez",
                //         "email": "martinezvega@xumonk.com",
                //         "some": "something"
                //     },
                //     {
                //         "company": "MEDIOT",
                //         "address": "Berwind, California",
                //         "name": "Harrison",
                //         "email": "harrisonvega@mediot.com",
                //         "some": "something"
                //     },
                //     {
                //         "company": "SNOWPOKE",
                //         "address": "Brenton, Montana",
                //         "name": "Rush",
                //         "email": "rushvega@snowpoke.com",
                //         "some": "something"
                //     }
                // ]
                response.data.map((groupItem, key) => {
                    return (
                        Object.keys(groupItem).map((item) => {
                            if (!(inArray(keyName, item))) {
                                keyName.push(item);
                            }

                        })

                    )
                });
                const datavalue = [];
                response.data.map((data, i) => {
                    datavalue.push(data);
                })
                //console.log(datavalue);

                this.setState({ tableHead: keyName, tableData: datavalue });
                console.log(this.state.tableData);
                console.log(this.state.tableHead);
            });

        return (
            <table>
                <thead>
                    <tr className="sepr">
                        {this.state.tableHead.map((item, i) => (
                            <th className="bx" key={i}>{Object.values(item)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((item, i) => (
                        <tr key={i} className="bx" >
                            {this.state.tableHead.map((item1, i) => (
                                <td>{Object.values(item[item1])}</td>
                            ))}
                            {/* <td style={{color:'#333'}}>{Object.values(item.company)}</td> */}
                            {/* <td style={{color:'#333'}}>{Object.values(item.address)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.name)}</td>
                            <td style={{color:'#333'}}>{Object.values(item.email)}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
        );
    }
}

export default TableComponent;