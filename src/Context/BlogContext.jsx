import React, {useReducer} from 'react';
import {act} from 'react-test-renderer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_post':
      return state.filter(blogpost => blogpost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogpost':
      console.log(state);
      console.log(action.payload);
      state = state.filter(post => post.id !== action.payload.id);
      return [...state, action.payload];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    if (callback) {
      callback();
    }
  };
};
const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    if (callback) {
      callback();
    }
  };
};

const deletePost = dispatch => {
  return id => {
    dispatch({type: 'delete_post', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deletePost, editBlogPost},
  [],
);
