import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../Context/BlogContext';

const ShowScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state} = useContext(Context);
  const post = state.find(post => post.id === id);
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Title: </Text>
        <Text>{post.title}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Content: </Text>
        <Text>{post.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '700',
  },
});
export default ShowScreen;
