import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap' 

class Topbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">GIPHY</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Topbar