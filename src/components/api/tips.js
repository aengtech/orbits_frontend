import axios from 'axios';

export const fetchTips = () => axios.get('http://localhost:5000/tips');

export const createTip = (newTip) => axios.post('http://localhost:5000/tips/upload/post', newTip);