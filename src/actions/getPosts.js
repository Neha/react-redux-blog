import apiPost from '../APIS/apiPost';

const getPosts =  () => {
  return async (dispatch, getState) => {
    const response = await apiPost.get('/posts');
    
    dispatch({
       type: "GET-POSTS", 
       payload : response
      });

  }
};

export default getPosts;
