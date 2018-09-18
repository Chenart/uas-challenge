import React, {Component} from 'react';


class HeaderCell extends Component {

  render () {

    var display = this.props.x;

    if (this.props.x === 1) {
      display = this.props.y;
    } else {
      display = this.props.x;
    }

    return (
      <div>{this.props.x}</div>
    );
  }

}

export default HeaderCell;
