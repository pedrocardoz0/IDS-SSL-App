import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleScreen from '../screens/article/ArticleScreen';

const ArticleStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ArticleScreen">
      <Stack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{
          headerShown: true,
          title: 'Voltar',
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ArticleStack;
