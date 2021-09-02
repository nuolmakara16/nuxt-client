import Axios from 'axios'
import app from '../constants/app_config'

export const HTTP = (token) => {
  return Axios.create({
    baseURL: app.api.base,
    timeout: app.api.timeout_short, // timeout is long
    headers: {
      Authorization: token,
      Accept: 'application/json',
    },
  })
}
function CreateHTTP(token) {
  const http = HTTP(token)
  http.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return interceptError(error)
    }
  )
  return http
}

function interceptError(error) {
  let status = 200
  if (!error.response) {
    status = 500
  } else {
    status = error.response.status
  }

  switch (status) {
    case 400:
      return {
        status: 400,
        title: 'The request parameters are incorrect.',
        message: 'No request parameter, empty value, wrong format',
      }
    case 401:
      return {
        status: 401,
        title: 'Not Authorized',
        message:
          'certification failed. Please try again after logging in again.',
      }
    case 403:
      return {
        status: 403,
        title: 'Authentication error',
        message:
          'certification failed. Please try again after logging in again.',
      }
    case 404:
      return {
        status: 404,
        title: 'No data found.',
        message: 'No corresponding data was found.',
      }
    case 409:
      return {
        status: 409,
        title: 'It is a registered users.',
        message: 'The entered information has already been registered.',
      }
    case 417:
      return {
        status: 417,
        title: 'Failed to create Resource.',
        message: 'Failed to create Resource.',
      }
    case 422:
      return {
        status: 422,
        title: 'Duplicated data',
        message: 'Duplicated data, please try again!',
      }
    case 500:
      return {
        status: 500,
        title: 'System error',
        message:
          'A system error has occurred. Please contact the administrator.',
      }
    default:
      return {
        status: 999,
        title: 'Exception error',
        message: 'Exception occurred',
      }
  }
}

function getAllUsers({ token }) {
  const path = '/clients?limit=0'
  const http = CreateHTTP(token)
  return http.get(path)
}

function getAllArticles({ token }) {
  const path = '/articles'
  const http = CreateHTTP(token)
  return http.get(path)
}

export default {
  getAllUsers,
  getAllArticles,
}

