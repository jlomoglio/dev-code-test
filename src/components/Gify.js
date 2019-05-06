import React, { Component } from 'react'

class Gify extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-3 p-3">
        <img
          src={this.props.src}
          className="p-2"
          style={{ display: 'block', margin: '0 auto'}}
          alt="Giphy"
        />
      </div>
    )
  }
}

export default Gify