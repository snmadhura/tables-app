import React, { Component } from 'react';
import './App.css';
import TableComponent from './TableComponent/TableComponent';
import NewTable from './DataTableComponent/DataTableComponent';

class App extends Component {
  render() {
    return (
       <TableComponent />
      // <NewTable />
    );
  }
}

export default App;
