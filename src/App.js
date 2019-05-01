import React, { Component } from 'react'

import CardList from './CardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => {
        if (! users.length) throw new Error('API CALL ERROR')
        this.setState({ robots: users })
      })
      .catch(err => console.log(err))
  }

  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value })
  }

  render () {
    const filteredFrobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    if (this.state.robots.length === 0) {
      return (
        <div className='tc'>
          <h3>LOADING...</h3>
        </div>
      )
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredFrobots} />
          </Scroll>
        </div>
      )
    }
  }
}

export default App
