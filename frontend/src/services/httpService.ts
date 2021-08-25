import axios, { Method } from 'axios'
import { loggerService } from './loggerService'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

var HTTP = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
})


const ajax = async (endpoint: string, method: Method = 'GET', data: any = null, options = {}) => {
  try {
    const res = await HTTP({
      url: endpoint,
      method,
      data,
      ...options,
    })
    return res && res.data
  } catch (err) {
    loggerService.error('Error in http request', err)
    throw err
  }
}

type AxiosFunc = (endpoint: string, data?: any) => Promise<any>

interface HttpService {
  get: AxiosFunc,
  post: AxiosFunc,
  put: AxiosFunc,
  delete: AxiosFunc
}

export const httpService: HttpService = {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data)
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data)
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data)
  },
}
