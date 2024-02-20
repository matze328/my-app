import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/v1/todos/',

  });

  export default api;