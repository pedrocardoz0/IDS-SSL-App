import React, {useState, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/login/Login';
import UserAPI from './src/api/User';
import AppContext from './context/AppContext';
import HomeScreen from './src/screens/home';

const App = () => {
  const [user, setUser] = useState(undefined);
  const Drawer = createDrawerNavigator();

  async function getUser() {
    const final = await UserAPI.me();
    setUser(final.data[0]);
  }

  function logout() {
    UserAPI.logout();
    setUser(null);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (user) {
    return (
      <NavigationContainer>
        <AppContext.Provider value={user}>
          <Drawer.Navigator
            initialRouteName={user ? 'Home' : 'Login'}
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <DrawerItem label="Logout" onPress={() => logout()} />
                </DrawerContentScrollView>
              );
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    );
  } else {
    return <Login getUser={getUser} />;
  }
};

export default App;
