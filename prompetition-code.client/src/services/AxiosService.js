import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const unsplashApi = Axios.create({
  baseURL: 'https://api.unsplash.com/photos/?client_id=V7dSys0b4fMgI4zRfk3SwqRsNsyoi1ifyXSITjUzSXM&w=800&h=400',
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
