import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '2e05b3b2aca4d9aa071a8647ddf3fa7e',
        language: 'pt-BR'
    }
})
export default api