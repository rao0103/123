import axios from 'axios'
const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: process.env.VUE_APP_TIMEOUT,
  });
  export default http;