import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>Olá, Michal</Text>
      <Text style={styles.mainText}>Selecione uma opção</Text>
    </View>
  );
}
