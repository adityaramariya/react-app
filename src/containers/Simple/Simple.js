import React, { Component } from 'react';

class Simple extends Component {
  render() {
    return (
  <div>
      <div className="app flex-row align-items-center">
        {this.props.children}
      </div>
  </div>    );
  }
}

export default Simple;
