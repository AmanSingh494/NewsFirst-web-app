import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props
    return (
      <div className='newsitems'>
        <img
          src={
            imgUrl === null
              ? 'https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg'
              : imgUrl
          }
          alt=''
          height={'200px'}
          width={'300px'}
          style={{ borderRadius: '10px 10px 0 0' }}
        />
        <div className='content'>
          <h3>{title}</h3>
          <p style={{ margin: '10px 0' }}>{description}</p>
          <div className='details'>
            <span>{author}</span>
            <span>on {new Date(date).toUTCString()}</span>
          </div>
          {/* target ="_blank" opens the link in a new tab */}
          <a href={newsUrl} target='_blank'>
            <button className='moreBtn'>Read More</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Newsitem
