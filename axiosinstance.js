import axios from 'axios'

const AI = axios.create({
  baseURL: process.env.API_URL,
  // timeout: 3000,
  // timeoutErrorMessage: 'TimeOut! Try again later',
})

export default AI
