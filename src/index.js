import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card.js'
import { robots }  from './robots'

import './index.css'
import 'tachyons'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<div>
  <Card name={robots[0].name} email={robots[0].email} id={robots[0].id} />
  <Card name={robots[1].name} email={robots[1].email} id={robots[1].id} />
  <Card name={robots[2].name} email={robots[2].email} id={robots[2].id} />
</div>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
