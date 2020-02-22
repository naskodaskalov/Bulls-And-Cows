import React, { Component } from 'react'
import Helpers from '../Utilities/Helpers'
import gameActions from '../Actions/GameActions'
import gameStore from '../Stores/GameStore'

export default class RangingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      loggedUser: window.localStorage.getItem('username'),
      isLoading: true
    }

    this.handleRangingData = this.handleRangingData.bind(this)

    gameStore.on(
      gameStore.eventTypes.GET_RANGING, this.handleRangingData
    )
  }

  componentDidMount () {
    gameActions.ranging()
  }

  componentWillUnmount () {
    gameStore.removeListener(
      gameStore.eventTypes.GET_RANGING, this.handleRangingData
    )
  }

  handleRangingData (data) {
    if (data) {
      var arr = data.data
      var players = []
      for (let i = 0; i < Object.values(arr).length; i++) {
        players.push(Object.values(arr)[i])
      }
      this.setState({ players, isLoading: false })
    }
  }

  render () {
    const players = this.state.players
    let sortedPlayers, topPlayers, loggedUserInTopList, loggedUserScore

    if (players) {
      sortedPlayers = Helpers.SortArrayDesc(players, 'points')
      topPlayers = Helpers.GetTopUsers(sortedPlayers, 25)
      loggedUserInTopList = topPlayers.filter(p => p.username === this.state.loggedUser)
      loggedUserScore = loggedUserInTopList.length === 0 ? sortedPlayers.filter((p, index) => {
        var player = p.username === this.state.loggedUser ? p : {}
        if (player) {
          player.id = index
        }
        return p.username === this.state.loggedUser
      }) : []
    }

    return (
      <div className='container'>
        <div className='text-center'>
          <h3 className='section-title'><i className='fas fa-chart-bar mr-2' />Класиране: TOP 25</h3>
          {this.state.isLoading ? (
            <div className='mt-5'>
              <div className='spinner-border d-block m-auto' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          ) : (
            <ul className='players-list mt-3'>
              {topPlayers.map((p, index) => {
                var loggedUser = this.state.loggedUser === p.username ? 'logged-user' : ''
                return (
                  <li className='player-li col-md-6 col-sm-12' key={index}>
                    <div className={`current-player ${loggedUser}`}>
                      <span className='player-number'>{index + 1}</span>
                      <span className='player-name'>{p.username}</span>
                      <span className='player-points'>{p.points}</span>
                    </div>
                  </li>
                )
              })}
              {loggedUserScore.length
                ? (
                  <li className='player-li col-md-6 col-sm-12 out-of-list'>
                    <div className='current-player logged-user'>
                      <span className='player-number'>{loggedUserScore[0].id}</span>
                      <span className='player-name'>{loggedUserScore[0].username}</span>
                      <span className='player-points'>{loggedUserScore[0].points}</span>
                    </div>
                  </li>
                )
                : ''}
            </ul>
          )}

        </div>
      </div>
    )
  }
}
