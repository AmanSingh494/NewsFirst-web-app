import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import SideBar from './components/SideBar'

export default class App extends Component {
  apiKey = '4594af5b0454452fa3cd47df0c9b180e'
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <SideBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path='/business'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'business'}
                  pageSize={9}
                  country={'in'}
                  category={'business'}
                />
              }
            ></Route>
            <Route
              exact
              path='/entertainment'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'entertainment'}
                  pageSize={9}
                  country={'in'}
                  category={'entertainment'}
                />
              }
            ></Route>
            <Route
              exact
              path='/general'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'general'}
                  pageSize={9}
                  country={'in'}
                  category={'general'}
                />
              }
            ></Route>
            <Route
              exact
              path='/health'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'health'}
                  pageSize={9}
                  country={'in'}
                  category={'health'}
                />
              }
            ></Route>
            <Route
              exact
              path='/science'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'science'}
                  pageSize={9}
                  country={'in'}
                  category={'science'}
                />
              }
            ></Route>
            <Route
              exact
              path='/sports'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'sports'}
                  pageSize={9}
                  country={'in'}
                  category={'sports'}
                />
              }
            ></Route>
            <Route
              exact
              path='/technology'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'technology'}
                  pageSize={9}
                  country={'in'}
                  category={'technology'}
                />
              }
            ></Route>
            <Route
              exact
              path='/'
              element={
                <News
                  setProgress={this.setProgress}
                  key={'home'}
                  pageSize={9}
                  country={'in'}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
