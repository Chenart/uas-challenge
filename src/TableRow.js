import React, {Component} from 'react';
import CellContainer from './CellContainer';

class TableRow extends React.Component {
  render() {

    const { data } = this.props;

    function checkIfHeader (x, y) {
      var isHeader;

      if ((x==0) || (y==0)) {
        return isHeader = true;
      } else {
        return isHeader = false;
      }
    }

    const row = data.map((data) =>
    <tr className={data.id}>
      <td className='leftCol'>{data.y}</td>
      <td><CellContainer x={data.x1} y={data.y} isHeader={checkIfHeader(data.x1, data.y)} /></td>
      <td><CellContainer x={data.x2} y={data.y} isHeader={checkIfHeader(data.x1, data.y)} /></td>
      <td><CellContainer x={data.x3} y={data.y} isHeader={checkIfHeader(data.x1, data.y)} /></td>
    </tr>
    /*
    <tr class={data.id}>
      <td class='leftCol'>{data.y}</td>
      <td>{data.x1}</td>
      <td>{data.x2}</td>
    </tr>
    */
    );
    return (
      <div>{row}</div>
    );
  }
}

export default TableRow;


// if not on the side, then is mathCell
