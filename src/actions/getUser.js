import apiPost from '../APIS/apiPost';

const getPosts =  (id) => {
  return async (dispatch, getState) => {
    const response = await apiPost.get(`/users/${id}`);
    dispatch({type: "GET-USER", payload : response});

  }
};

export default getPosts;
