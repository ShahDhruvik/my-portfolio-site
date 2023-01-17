import axios from 'axios'

const AI = axios.create({
  baseURL: 'http://localhost:1337/',
  // timeout: 3000,
  // timeoutErrorMessage: 'TimeOut! Try again later',
})

export default AI
