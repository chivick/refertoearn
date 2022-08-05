import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

// API.interceptors.request.use((req) => {
//     req.headers.Authorization = `Bearer --token--`

//     return req
// })

export const addNewUser = (userDetails) => API.post('/users/new', userDetails)
export const login = (userDetails) => API.post('/users/login', userDetails)