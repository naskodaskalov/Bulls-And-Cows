import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import userActions from '../Actions/UserActions'
import UserData from '../Data/UserData'

class UserStore extends EventEmitter {
  register (user) {
    UserData
      .register(user)
      .then(data => this.emit(this.eventTypes.USER_REGISTERED, data))
  }

  login (user) {
    UserData
      .login(user)
      .then(data => this.emit(this.eventTypes.USER_LOGGED_IN, data))
  }

  updatePoints (userData) {
    UserData
      .updatePoints(userData)
      .then(data => this.emit(this.eventTypes.USER_UPDATE_POINTS, data))
  }

  handleAction (action) {
    switch (action.type) {
      case userActions.types.REGISTER_USER: {
        this.register(action.user)
        break
      }
      case userActions.types.LOGIN_USER: {
        this.login(action.user)
        break
      }
      case userActions.types.UPDATE_USER_POINTS: {
        this.updatePoints(action.userData)
        break
      }
      default: break
    }
  }
}

const userStore = new UserStore()

userStore.eventTypes = {
  USER_REGISTERED: 'user_registered',
  USER_LOGGED_IN: 'user_logged_in',
  USER_UPDATE_POINTS: 'user_update_points'
}
dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore
