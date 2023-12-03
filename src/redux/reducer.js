import { GET_POSTS, GET_POSTS_FAILED, GET_POSTS_SUCCESS } from "./actionTypes";

const initialState = {
  posts: null,
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
