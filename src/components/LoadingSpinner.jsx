import React, { Component } from 'react'
import loading from './loadingSpinner.gif'

export class LoadingSpinner extends Component {
  render() {
    return (
      <div style={{ gridColumn: '1/4' }}>
        <img
          src={loading}
          alt='loading'
          style={{ height: '100px', width: '100px' }}
        />
      </div>
    )
  }
}

export default LoadingSpinner
