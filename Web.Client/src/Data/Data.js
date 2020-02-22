import Auths from '../Utilities/Auths'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://bullsandcows-server.herokuapp.com'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const applyAuthorizationHeader = (options, authenticated) => {
  if (authenticated) {
    options.headers.Authorization = `bearer ${Auths.getToken()}`
  }
}

const handleJsonResponse = res => res.json()

class Data {
  static post (url, data, authenticated) {
    const options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify(data)

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }

  static get (url, authenticated) {
    const options = getOptions()
    options.method = 'GET'

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }

  static postComment (url, data, authenticated) {
    const options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify()

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }
}

export default Data
