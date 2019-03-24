export const getBearsSuccess = (bears) => ({ type: 'GET_BEARS_SUCCESS', bears });
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED' });
export const getBears = () => async (dispatch) => {
  try {
    //console.log('get-bear')
    const response = await axios.get(`http://localhost/api/bears`)
    const responseBody = await response.data;
    console.log('response bear: ', responseBody)
    dispatch(getBearsSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getBearsFailed());
  }
}
export const bearReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_BEARS_SUCCESS':
      console.log('action bear: ', action.bears)
      return action.bears
    case 'GET_BEARS_FAILED':
      console.log('action bear: Failed')
      return action.bears
    default:
      return state
  }
}