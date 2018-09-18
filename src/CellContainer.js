import React, {Component} from 'react';
import MathCell from './MathCell';
import HeaderCell from './HeaderCell';

class CellContainer extends Component {

  render () {

    if (this.props.isHeader == true) {
      return (
        <HeaderCell x={this.props.x} y={this.props.y} />
      );
    } else {
      return (
        <MathCell x={this.props.x} y={this.props.y} />
      );
    }
  }
}

export default CellContainer;
