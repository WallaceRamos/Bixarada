import axios from 'axios';

global.IP_ADDRESS = 'http://192.168.10.5:3333' 

const api = axios.create({
  baseURL: global.IP_ADDRESS
});
export default api;