import Data from './Data'

class GameData {
  static ranging () {
    return Data.get('/game/getallusers')
  }
}

export default GameData
