import React, { Component } from 'react'

class HoverCounter2 extends Component {
  render() {
    const {count, increamentCount} = this.props
    return (
      <h2 onMouseOver={increamentCount}> Hovered {count} times</h2>
    )
    
  }
}

export default HoverCounter2
