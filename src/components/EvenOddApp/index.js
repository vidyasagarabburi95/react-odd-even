// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    const randomCounter = Math.floor(Math.random() * 101)
    this.setState(prevState => ({
      count: prevState.count + randomCounter,
    }))
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="container">
        <h1>Count {count}</h1>
        <p className="countis">Count is {text}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
