import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Provider} from './src/Context/BlogContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({navigation}) => ({
              title: 'Blog List',
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Create')}>
                    <Text>Create Blog</Text>
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({navigation, route}) => ({
              headerRight: () => {
                console.log(route);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Edit', {id: route.params.id})
                    }>
                    <FontAwesome name="pencil" size={25} color="black" />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
