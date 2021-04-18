export default ( tips = [], action ) => {
    switch (action.type) {
      case 'FETCH_TIPS':
        return action.payload;
      case 'CREATE_TIP':
        return [ ...tips, action.payload];
      default:
        return tips;
    }
  }