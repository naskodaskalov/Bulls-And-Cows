export default class Helpers {
  static handleFormChange (event, stateField) {
    const target = event.target
    const field = target.name
    const value = target.value

    const state = this.state[stateField]
    state[field] = value

    this.setState({ [stateField]: state })
  }

  static SortArrayAsc (array, property) {
    return array.sort(function (a, b) {
      if (a[property] > b[property]) {
        return 1
      } else {
        return -1
      }
    })
  }

  static SortArrayDesc (array, property) {
    return array.sort(function (a, b) {
      if (a[property] > b[property]) {
        return -1
      } else {
        return 1
      }
    })
  }

  static GetTopUsers (array, number) {
    return array.slice(0, number)
  }
}
