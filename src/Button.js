import React, { Component } from 'react';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render() {
    const x = this.props;
    return (
      <button onClick={this.handleClick}>
        + {this.props.incrementValue}
      </button>
    );
  }
}

export default Button;