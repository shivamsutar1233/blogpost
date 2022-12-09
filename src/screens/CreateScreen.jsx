import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import BlogForm from '../Components/BlogForm';
import {Context} from '../Context/BlogContext';
const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
