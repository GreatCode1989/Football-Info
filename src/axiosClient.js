import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://www.thesportsdb.com/api/v1/json/3/',
  });



 export default axiosClient;