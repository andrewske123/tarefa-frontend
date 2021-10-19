import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backend-tarefa.herokuapp.com'
})
 
export default api;