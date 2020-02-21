const Auths = {
  isLoggedIn: () => {
    return window.localStorage.getItem('username')
  }
}

export default Auths
