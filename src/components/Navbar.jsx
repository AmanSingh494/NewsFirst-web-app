import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <nav className='nav'>
        <div className="title">
            <h1>NewsFirst</h1>
        </div>
        <div className="navigation">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
