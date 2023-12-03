import { GET_POSTS, GET_POSTS_FAILED, GET_POSTS_SUCCESS } from "./actionTypes";

export const getPosts = (payload) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

export const getPostsSuccess = (payload) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
};

export const getPostsFailed = (payload) => {
  return {
    type: GET_POSTS_FAILED,
    payload,
  };
};
