import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/login/Login';
import UserAPI from './src/api/User';
import AppContext from './context/AppContext';
import HomeScreen from './src/screens/home';

const App = () => {
  const [user, setUser] = useState(undefined);
  const Drawer = createDrawerNavigator();

  async function getUser() {
    const final = await UserAPI.get();
    setUser(final.data[0]);
  }

  useEffect(() => {
    getUser();
  });

  if (user) {
    return (
      <NavigationContainer>
        <AppContext.Provider value={user}>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    );
  } else {
    return <Login getUser={getUser} />;
  }
};

export default App;
