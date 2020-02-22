import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import gameActions from '../Actions/GameActions'
import GameData from '../Data/GameData'

class GameStore extends EventEmitter {
  ranging () {
    GameData
      .ranging()
      .then(data => this.emit(this.eventTypes.GET_RANGING, data))
  }

  handleAction (action) {
    switch (action.type) {
      case gameActions.types.GET_RANGING: {
        this.ranging()
        break
      }
      default: break
    }
  }
}

const gameStore = new GameStore()

gameStore.eventTypes = {
  GET_RANGING: 'get_ranging'
}
dispatcher.register(gameStore.handleAction.bind(gameStore))

export default gameStore
