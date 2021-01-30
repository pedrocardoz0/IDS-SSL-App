import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeDrawerStack from './src/stack/HomeDrawerStack';
import ComorbityStack from './src/stack/ComorbityStack';
import Login from './components/login/Login';

import UserAPI from './src/api/User';
import AppContext from './context/AppContext';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      getUser: this.getUser,
      logout: this.logout,
    };
    this.getUser = this.getUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  async getUser() {
    const final = await UserAPI.me();
    console.log(final.data[0]);
    this.setState({user: final.data[0]});
  }

  logout = () => {
    UserAPI.logout();
    this.setState({user: false});
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const Stack = createStackNavigator();

    if (this.state.user) {
      return (
        <NavigationContainer>
          <AppContext.Provider value={this.state}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeDrawerStack}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Comorbity"
                component={ComorbityStack}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </AppContext.Provider>
        </NavigationContainer>
      );
    } else {
      return <Login getUser={this.getUser} />;
    }
  }
}

export default App;
