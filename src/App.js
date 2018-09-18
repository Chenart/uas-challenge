import React, { Component } from 'react';
import './App.css';
import TableRow from './TableRow';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // I need some way to generate this array
    // Probably a double for loop that calls upon creation


    const obj = [{
      y: 0,
      x1: 1,
      x2: 2,
      x3: 3,
      id: 'headerCell'
    },{
      y: 1,
      x1: 1,
      x2: 2,
      x3: 3
    }, {
      y: 2,
      x1: 1,
      x2: 2,
      x3: 3
    }, {
      y: 3,
      x1: 1,
      x2: 2,
      x3: 3
    }, {
      y: 4,
      x1: 1,
      x2: 2,
      x3: 3
    }];


    return (
      <table>
        <TableRow data={obj} />
      </table>
    );
  }
}

export default App;
