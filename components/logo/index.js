import React from 'react';
import {View, Text} from 'react-native';
import styles from './Logo.style';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.secondaryText}>Bem Vindo</Text>
      <Text style={styles.principalText}>
        IDS <Text style={styles.redText}>SSL</Text> -
      </Text>
      <Text style={styles.principalText}>Community</Text>
    </View>
  );
};

export default Logo;
