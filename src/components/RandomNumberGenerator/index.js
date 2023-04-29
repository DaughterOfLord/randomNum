/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends react.Component {
  state = {count: 0}

  onGenerateBtn = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100);
    this.setState(prevState => {
      console.log(`previous count value ${prevState.count}`)
      return {count: prevState.count + randomNumber}
    })

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="generate-btn" onClick={this.onGenerateBtn}>Generate</button>
          <p className="random-num">0</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
