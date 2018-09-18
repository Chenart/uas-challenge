import React, {Component} from 'react';
import './MathCell.css';

class MathCell extends Component {

  state = {
      isVisible: false
  }

  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent () {
    this.setState( { isVisible: true })
  }

  render () {

    var result = this.props.x * this.props.y;

    if (this.state.isVisible == true) {
      return (
        <div>{result}</div>
      );
    } else {
      return (
        <button onClick={this.handleClickEvent}></button>
      );
    }
  }
}

export default MathCell;
