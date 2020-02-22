import dispatcher from '../dispatcher'

const userActions = {
  types: {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    UPDATE_USER_POINTS: 'UPDATE_USER_POINTS'
  },
  register (user) {
    dispatcher.dispatch({
      type: this.types.REGISTER_USER,
      user
    })
  },
  login (user) {
    dispatcher.dispatch({
      type: this.types.LOGIN_USER,
      user
    })
  },
  updatePoints (userData) {
    dispatcher.dispatch({
      type: this.types.UPDATE_USER_POINTS,
      userData
    })
  }
}

export default userActions
