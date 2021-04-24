export default ( cars = [], action ) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    case 'CREATE_CAR':
      return [ ...cars, action.payload];
    case 'UPDATE':
      return cars.map((car) => (car._id === action.payload._id ? action.payload : car));
    default:
      return cars;
  }
}