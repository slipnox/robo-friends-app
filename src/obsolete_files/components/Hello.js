import React, { Component } from 'react'
import './Hello.css'

// CLASS MODE
class Hello extends Component {
  render () {
    return (
      <div className='f1 tc'>
        <h1>Hello World</h1>
        <p>Welcome to RactJS</p>
        <p> { this.props.greeting } </p>
      </div>
    )
  }
}

// FUNCTION MODE
// const Hello = (props) => {
//   // console.log(props) // props is an simply object
//   return (
//     <div className='f1 tc'>
//       <h1>Hello World</h1>
//       <p>Welcome to RactJS</p>
//       <p> { props.greeting } </p>
//     </div>
//   )
// }

export default Hello
