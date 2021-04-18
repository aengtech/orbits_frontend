import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchTips = () => API.get('/tips');

export const createTip = (newTip) => API.post('/tips/upload/post', newTip);