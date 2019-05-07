import React, { Component } from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from "../components/ErrorBoundry";
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
    const { robots, searchField } = this.state

    const filteredFrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length
      ? (
          <div className='tc'>
            <h3>LOADING...</h3>
          </div> )
      : (
          <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredFrobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
      )
  }
}

export default App
