import React, {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import AppContext from '../../context/AppContext';

const HomeStack = () => {
  const user = useContext(AppContext);
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={() => {
        return (
          <DrawerContentScrollView>
            <DrawerItem label="logout" onPress={() => user.logout()} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
