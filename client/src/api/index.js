import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`

    return req
})

export const verifyRef = (referrer) => API.post('/users/verifyRef', referrer)
export const addNewUser = (userDetails) => API.post('/users/new', userDetails)
export const login = (userDetails) => API.post('/users/login', userDetails)

export const getUserDetails = () => API.get('/users/details')