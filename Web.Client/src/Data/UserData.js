import Data from './Data'
const baseUrl = '/auth'

class UserData {
  static register (user) {
    return Data.post(`${baseUrl}/signup`, user)
  }

  static login (user) {
    return Data.post(`${baseUrl}/login`, user)
  }

  static updatePoints (userData) {
    return Data.post(`${baseUrl}/updatePoints`, userData)
  }
}

export default UserData
