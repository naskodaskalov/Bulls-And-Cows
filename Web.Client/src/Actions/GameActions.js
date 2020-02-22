import dispatcher from '../dispatcher'

const gameActions = {
  types: {
    GET_RANGING: 'GET_RANGING'
  },
  ranging (user) {
    dispatcher.dispatch({
      type: this.types.GET_RANGING,
      user
    })
  }
}

export default gameActions
