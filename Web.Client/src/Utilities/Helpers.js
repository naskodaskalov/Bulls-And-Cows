export default class Helpers {
  static GetServerError (data) {
    let firstError = data.message
    if (data.errors) {
      firstError = Object
        .keys(data.errors)
        .map(k => data.errors[k])[0]
    }

    if (firstError.length) {
      this.setState({
        errors: {
          globalError: firstError
        }
      })
    }
  }

  static GetRandomFourDigitsNumber () {
    var randomnumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    while (!this.checkIfValid(randomnumber)) {
      randomnumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    }

    return randomnumber
  }

  static ValidateNumber (num) {
    var isNumValid = true
    var arr = num.toString().split('')
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      if (arr.lastIndexOf(element) > -1 && arr.lastIndexOf(element) !== i) {
        isNumValid = false
      }
    }

    return isNumValid
  }

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
