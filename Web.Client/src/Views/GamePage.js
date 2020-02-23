import React, { Component } from 'react'
import InputWithButton from '../Components/Common/InputWithButton'
import Button from '../Components/Common/Button'
import Helpers from '../Utilities/Helpers'

import userStore from '../Stores/UserStore'
import userActions from '../Actions/UserActions'

import './GamePage.css'

export default class GamePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      guestNumber: '',
      startNewGame: false,
      numberToGuess: 0,
      attempts: 0,
      points: 10,
      history: [],
      isGameFinished: false,
      wonNumber: 0,
      error: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleGameStart = this.handleGameStart.bind(this)
    this.handleNumberCheck = this.handleNumberCheck.bind(this)
    this.handleKeyEvent = this.handleKeyEvent.bind(this)
    this.handleStartNewGame = this.handleStartNewGame.bind(this)
    this.handlePointsSubmit = this.handlePointsSubmit.bind(this)
    this.handleUserUpdate = this.handleUserUpdate.bind(this)

    userStore.on(
      userStore.eventTypes.USER_UPDATE_POINTS, this.handleUserUpdate
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_UPDATE_POINTS, this.handleUserUpdate
    )
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleGameStart () {
    const randomNumber = Helpers.GetRandomFourDigitsNumber.bind(this)()

    if (this.checkIfValid(randomNumber)) {
      this.setState({ startNewGame: true, numberToGuess: randomNumber })
    }
  }

  handleStartNewGame () {
    this.setState({
      guestNumber: '',
      startNewGame: false,
      numberToGuess: 0,
      attempts: 0,
      points: 10,
      history: [],
      isGameFinished: false,
      wonNumber: 0
    })

    this.handleGameStart()
  }

  handleNumberCheck (e) {
    e.preventDefault()
    const numberToGuess = this.state.numberToGuess
    const guestNumber = this.state.guestNumber

    if (guestNumber.length < 4) {
      return
    }

    var history = this.state.history
    var attempts = this.state.attempts
    var result = this.checkNumber(numberToGuess, guestNumber)
    var isGameFinished = result[0] === 4
    var points = isGameFinished ? this.state.points : this.state.points - 1

    if (points < 1) {
      points = 1
    }

    history.push({
      bulls: result[0],
      cows: result[1],
      guestNumber: guestNumber,
      id: attempts
    })

    if (isGameFinished) {
      const userData = window.localStorage.getItem('user')

      const data = JSON.parse(userData)
      data.points = points
      this.handlePointsSubmit(data)
    }

    this.setState({
      guestNumber: '',
      attempts: attempts + 1,
      history: Helpers.SortArrayDesc(history, 'id'),
      wonNumber: result[0] === 4 ? guestNumber : 0,
      isGameFinished,
      points
    })
  }

  handlePointsSubmit (userData) {
    userActions.updatePoints(userData)
  }

  handleUserUpdate (data) {
    if (!data.success) {
      this.setState({ error: 'Connection problem! Try later!' })
    }
  }

  handleKeyEvent (e) {
    if (e.keyCode === 13) {
      this.handleNumberCheck(e)
    }
  }

  checkNumber (computerNumber, personNumber) {
    let cows = 0
    let bulls = 0
    const compArr = computerNumber.toString().split('')
    const personArr = personNumber.toString().split('')
    for (let i = 0; i < compArr.length; i++) {
      for (let k = 0; k < personArr.length; k++) {
        if (compArr[i] === personArr[i]) {
          bulls++
          break
        }
        if (compArr[i] === personArr[k]) {
          cows++
        }
      }
    }

    const result = [bulls, cows]
    return result
  }

  checkIfValid (randomNumber) {
    return Helpers.ValidateNumber.bind(this)(randomNumber)
  }

  render () {
    return (
      <div className='container'>
        <div className='text-center'>
          <h3 className='section-title'>Крави и Бикове - The game</h3>

          {this.state.error ? (
            <div className='alert alert-danger' role='alert'>
              {this.state.error}
            </div>
          ) : ''}
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
                  onKeyUp={this.handleKeyEvent}
                />
                <div className='history-block'>
                  {this.state.isGameFinished ? (
                    <div>
                      <p>Поздравление! Познахте числото {this.state.wonNumber} от {this.state.attempts} опита и спечелихте {this.state.points} точки.</p>
                      {this.state.history.map((a, index) => (
                        <p key={index}>Вашето число е {a.guestNumber}. Имате {a.bulls} бика и {a.cows} крави.</p>
                      )
                      )}
                      <Button value='Започни нова игра' onSubmit={this.handleStartNewGame} />
                    </div>
                  ) : (
                    <div>
                      {this.state.history.map((a, index) => (
                        <p key={index}>Вашето число е {a.guestNumber}. Имате {a.bulls} бика и {a.cows} крави.</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : <Button value='Започни нова игра' onSubmit={this.handleGameStart} />}
          </section>
        </div>
      </div>
    )
  }
}
