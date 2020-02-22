import React, { Component, Fragment } from 'react'
import InputWithButton from '../Components/Common/InputWithButton'
import Button from '../Components/Common/Button'
import Helpers from '../Utilities/Helpers'
import { throwStatement } from '@babel/types'

export default class GamePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      guestNumber: '',
      startNewGame: false,
      numberToGuess: 0,
      attempts: 1,
      history: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleGameStart = this.handleGameStart.bind(this)
    this.handleNumberCheck = this.handleNumberCheck.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleGameStart () {
    var randomnumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    while (!this.checkIfValid(randomnumber)) {
      randomnumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    }

    if (this.checkIfValid(randomnumber)) {
      this.setState({ startNewGame: true, numberToGuess: randomnumber })
    }
  }

  handleNumberCheck (e) {
    e.preventDefault()
    const numberToGuess = this.state.numberToGuess
    const guestNumber = this.state.guestNumber
    var history = this.state.history
    var attempts = this.state.attempts

    var bulls = this.checkForBulls(numberToGuess, guestNumber)
    var cows = this.checkForCows(numberToGuess, guestNumber)

    history.push({
      bulls: bulls,
      cows: cows,
      guestNumber: guestNumber,
      id: attempts
    })

    this.setState({
      guestNumber: '',
      attempts: attempts + 1,
      history: Helpers.SortArrayDesc(history, 'id')
    })
  }

  checkForBulls (computerNumber, personNumber) {
    let counter = 0
    const compArr = computerNumber.toString().split('')
    const personArr = personNumber.toString().split('')
    for (let i = 0; i < compArr.length; i++) {
      if (compArr[i] === personArr[i]) {
        counter++
      }
    }

    return counter
  }

  checkForCows (computerNumber, personNumber) {
    let counter = 0
    const compArr = computerNumber.toString().split('')
    const personArr = personNumber.toString().split('')
    for (let i = 0; i < compArr.length; i++) {
      for (let k = 0; k < personArr.length; k++) {
        if (compArr[i] === personArr[k]) {
          counter++
        }
      }
    }

    return counter
  }

  checkIfValid (randomnumber) {
    var isNumValid = true
    var arr = randomnumber.toString().split('')
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      if (arr.lastIndexOf(element) > -1 && arr.lastIndexOf(element) !== i) {
        isNumValid = false
      }
    }

    return isNumValid
  }

  render () {
    return (
      <div className='container'>
        <div className='text-center'>
          <h3 className='section-title'>Игра</h3>
          <section className='game-container'>
            {this.state.startNewGame ? (
              <div>
                <InputWithButton
                  value={this.state.guestNumber}
                  onChange={this.handleInputChange}
                  placeHolder='Въведи число'
                  name='guestNumber'
                  btnValue='Провери'
                  onSave={this.handleNumberCheck}
                />
                <div className='history-block'>
                  {this.state.history.map((a, index) => (
                    <p key={index}>Вашето число е {a.guestNumber}. Имате {a.bulls} бика и {a.cows} крави.</p>
                  ))}
                </div>
              </div>
            ) : <Button value='Започни нова игра' onSubmit={this.handleGameStart} />}
          </section>
        </div>
      </div>
    )
  }
}
