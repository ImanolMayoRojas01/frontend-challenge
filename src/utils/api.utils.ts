import axios from 'axios'
import { API_HOST } from '@/constants/enviroments'

export const getApiConnection = () => {
  const API = axios.create({
    baseURL: API_HOST
  })
  return API
}
