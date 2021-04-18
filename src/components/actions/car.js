import * as api from '../api/cars';

export const getCars = () => async (dispatch) => {
  try {
      const { data } = await api.fetchCars()

      dispatch({ type: 'FETCH_CARS', payload: data });
  } catch (error) {
      console.log(error.message);
  }
}

export const createCar = (car) => async (dispatch) => {
  try {
    const { data } = await api.createCar(car);

    dispatch({ type: 'CREATE_CAR', payload: data });
  } catch (error) {
      console.log(error.message);
  }
}