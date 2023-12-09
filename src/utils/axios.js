import axios from 'axios'
import { BASE_URL } from '../env'

// import { getUserFromLocalStorage } from './LocalStorage'

const customFetch = axios.create({
  baseURL:BASE_URL+`/api/v1`,

})

// customFetch.interceptors.request.use((config) => {
//   const user = getUserFromLocalStorage()
//   if (user) {
//     config.headers['Authorization'] = `Bearer ${user.token}`
//   }
//   return config
// })

// export const checkForUnauthorizedResponse = (error, thunkAPI) => {
//   if (error.response.status === 401) {
//     thunkAPI.dispatch(clearStore())
//     return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
//   }
//   return thunkAPI.rejectWithValue(error.response.data.msg)
// }

export default customFetch