import React, { Component } from 'react'
import Newsitem from './Newsitem'
import LoadingSpinner from './LoadingSpinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  constructor(props) {
    super(props)
    console.log('hello i am a constructor')
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `NewsFirst - ${this.capitalizeFirstLetter(
      this.props.category
    )}`
  }
  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4594af5b0454452fa3cd47df0c9b180e&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url)
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(50)
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    window.scrollTo(0, 0)
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews()
  }
  handleNextClick = async () => {
    await this.setState({
      page: this.state.page + 1
    })
    this.updateNews()
  }
  handlePrevClick = async () => {
    await this.setState({
      page: this.state.page - 1
    })
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    console.log(this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=4594af5b0454452fa3cd47df0c9b180e&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log('fetch more ')
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  render() {
    console.log('rendering')
    return (
      <>
        <div>
          {/* {this.state.loading && <LoadingSpinner />} */}
          <h1 style={{ textAlign: 'center', margin: '45px 0' }}>
            {' '}
            NewsFirst - Headlines from{' '}
            {this.capitalizeFirstLetter(this.props.category)}
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.totalResults !== this.state.articles.length
                ? true
                : false
            }
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              justifyItems: 'center',
              alignItems: 'center',
              gap: '30px',
              padding: '0 100px',
              rowGap: '70px'
            }}
            loader={<LoadingSpinner />}
          >
            {this.state.articles.map((item, index) => {
              return (
                <Newsitem
                  key={index}
                  title={
                    item.title === null ? '' : `${item.title.slice(0, 80)}...`
                  }
                  description={
                    item.description === null
                      ? ''
                      : `${item.description.slice(0, 100)}..`
                  }
                  imgUrl={item.urlToImage}
                  newsUrl={item.url}
                  author={
                    item.author === null ? 'Unknown' : `by ${item.author}`
                  }
                  date={item.publishedAt}
                />
              )
            })}
          </InfiniteScroll>
        </div>
        {/* <div
          className='pageBtn'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: ' 30px 200px'
          }}
        > */}
        {/* <button
            style={{
              color: 'white',
              fontSize: '0.9rem',
              backgroundColor: 'rgb(44 50 56)'
            }}
            disabled={this.state.page <= 1 ? true : false}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            style={{
              color: 'white',
              fontSize: '0.9rem',
              backgroundColor: 'rgb(44 50 56)'
            }}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? true
                : false
            }
            onClick={this.handleNextClick}
          >
            {' '}
            Next &rarr;
          </button> */}
        {/* </div> */}
      </>
    )
  }
}

export default News
