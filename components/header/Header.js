import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';
import AppContext from '../../context/AppContext';

const Header = () => {
  const user = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.subText}>Olá, {user.user.name}</Text>
      <Text style={styles.mainText}>Conheça mais !</Text>
    </View>
  );
};

export default Header;
