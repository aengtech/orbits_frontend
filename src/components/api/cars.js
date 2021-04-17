import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchCars = () => API.get('/cars');
export const createCar = (newCar) => API.post('/cars/upload/post', newCar);
export const updatePost = ( id, updatedPost ) => API.patch(`/cars/${id}`, updatedPost);