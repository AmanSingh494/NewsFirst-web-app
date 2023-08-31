import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideBar extends Component {
  render() {
    return (
      <div>
        <div className='sideBar show'>
          <h3
            style={{
              padding: '20px 20px',
              margin: '0',
              backgroundColor: '#d5d5d5'
            }}
          >
            Categories{' '}
          </h3>
          <ul className='navSideUl'>
            <li>
              <Link to='/general'>
                <span class='material-symbols-outlined'>home</span>General
              </Link>
            </li>
            <li>
              <Link to='/business'>
                <span class='material-symbols-outlined'>monitoring</span>
                Business
              </Link>
            </li>
            <li>
              <Link to='/entertainment'>
                <span class='material-symbols-outlined'>play_arrow</span>
                Entertainment
              </Link>
            </li>
            <li>
              <Link to='/health'>
                <span class='material-symbols-outlined'>health_and_safety</span>
                Health
              </Link>
            </li>
            <li>
              <Link to='/science'>
                <span class='material-symbols-outlined'>science</span>Science
              </Link>
            </li>
            <li>
              <Link to='/sports'>
                <span class='material-symbols-outlined'>sports_basketball</span>
                Sports
              </Link>
            </li>
            <li>
              <Link to='/technology'>
                <span class='material-symbols-outlined'>
                  precision_manufacturing
                </span>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideBar
