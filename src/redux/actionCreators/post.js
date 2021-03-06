import * as actionTypes from "../actionTypes/actionTypes";
import {
  createPost,
  getPosts,
  deletePost,
  likePost,
  dislikePost
} from "../../axios";

export const CreatePost = data => {
  return async dispatch => {
    try {
      let response = await createPost(data);

      dispatch({
        type: actionTypes.CREATE_POST,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetPosts = videoId => {
  return async dispatch => {
    try {
      let response = await getPosts(videoId);

      dispatch({
        type: actionTypes.GET_POSTS,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeletePost = id => {
  return async dispatch => {
    try {
      let response = await deletePost(id);

      dispatch({
        type: actionTypes.DELETE_POST,
        payload: response.data.post._id
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const LikePost = id => {
  return async dispatch => {
    try {
      let response = await likePost(id);

      dispatch({
        type: actionTypes.LIKE_POST,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DislikePost = id => {
  return async dispatch => {
    try {
      let response = await dislikePost(id);

      dispatch({
        type: actionTypes.DISLIKE_POST,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
