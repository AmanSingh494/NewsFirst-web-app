import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  //   static propTypes = {

  //   }
  toggleSideBar = () => {
    const sidebar = document.querySelector('.sideBar')
    sidebar.classList.toggle('show')
  }
  render() {
    return (
      <>
        <nav className='nav'>
          <div className='title'>
            <Link to='#'>
              {' '}
              <h1>NewsFirst</h1>
            </Link>
          </div>
          <div className='navigation'>
            <ul className='navUl'>
              <li>
                <Link to='/general'>General</Link>
              </li>
              <li>
                <Link to='/business'>Business</Link>
              </li>
              <li>
                <Link to='/entertainment'>Entertainment</Link>
              </li>
              <li>
                <Link to='/health'>Health</Link>
              </li>
              <li>
                <Link to='/science'>Science</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/technology'>Technology</Link>
              </li>
            </ul>
          </div>
          <span
            onClick={this.toggleSideBar}
            className='material-symbols-outlined'
          >
            menu
          </span>
        </nav>
      </>
    )
  }
}

export default Navbar
