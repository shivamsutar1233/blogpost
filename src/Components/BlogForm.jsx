import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useContext, useState} from 'react';

const BlogForm = ({initialValues, onSubmit}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Save Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};
const styles = StyleSheet.create({
  view: {
    padding: 20,
    fontFamily: 'sans-serif',
  },
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
});

export default BlogForm;
