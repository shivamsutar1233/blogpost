import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import BlogForm from '../Components/BlogForm';
import {Context} from '../Context/BlogContext';

const EditScreen = ({route, navigation}) => {
  const id = route.params.id;
  const {state, editBlogPost} = useContext(Context);
  const post = state.find(post => post.id === id);

  return (
    <BlogForm
      initialValues={{title: post.title, content: post.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreen;
