import React from 'react';
import {View, Text} from 'react-native';
import styles from './Logo.style';

const Logo = () => {
  return (
    <View style={styles.container_logo}>
      <View style={styles.wrapper_principal}>
        <Text style={styles.principal}>Alto Do</Text>
      </View>
      <Text style={styles.secondary}>Rio Negro</Text>
    </View>
  );
};

export default Logo;
