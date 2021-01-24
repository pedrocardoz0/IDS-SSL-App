import React from 'react';
import {ScrollView} from 'react-native';
import styles from './Layout.style';

export default function Layout(props) {
  return <ScrollView style={styles.main}>{props.children}</ScrollView>;
}
