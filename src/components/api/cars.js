import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchCars = () => API.get('/cars');
export const createCar = (newCar) => API.post('/cars/upload/post', newCar);
export const updateCar = ( id, updatedCar ) => API.patch(`/cars/${id}`, updatedCar);