import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReportComorbityScreen from '../screens/comorbity/ReportComorbityScreen';

const ComorbityStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="TriageScreen">
      <Stack.Screen
        name="ReportScreen"
        component={ReportComorbityScreen}
        options={{
          headerShown: true,
          title: 'Registrar Novo Caso',
          headerStyle: {elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        }}
      />
    </Stack.Navigator>
  );
};

export default ComorbityStack;
