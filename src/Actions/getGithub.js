export const getGithubSuccess = (github) => ({ type: 'GET_GITHUB_SUCCESS', github });
export const getGithubFailed = () => ({ type: 'GET_GITHUB_FAILED' });
export const getGithub = (USER) => async (dispatch) => {
  try {
    //  console.log('get Github')
    //  const response = await axios.get(`https://api.github.com/users/${USER}`)
    const response = await axios.get(`https://api.github.com/users/gtfarng`)
    const responseBody = await response.data;
    console.log('response github: ', responseBody)
    dispatch(getGithubSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getGithubFailed());
  }
}
export const githubReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_GITHUB_SUCCESS':
      console.log('action github: ', action.github)
      return action.github
    case 'GET_GITHUB_FAILED':
      console.log('action github: Failed')
      return action.github
    default:
      return state
  }
}