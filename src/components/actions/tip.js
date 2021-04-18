import * as api from '../api/tips';

export const getTips = () => async (dispatch) => {
  try {
      const { data } = await api.fetchTips()

      dispatch({ type: 'FETCH_TIPS', payload: data });
  } catch (error) {
      console.log(error.message);
  }
}

export const createTip = (tip) => async (dispatch) => {
  try {
    const { data } = await api.createTip(tip);

    dispatch({ type: 'CREATE_TIP', payload: data });
  } catch (error) {
      console.log(error.message);
  }
}