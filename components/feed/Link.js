import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles from './Link.style';

function Link(props) {
  return (
    <TouchableHighlight style={styles.main}>
      <Text style={styles.font}>{props.text}</Text>
    </TouchableHighlight>
  );
}

export default Link;
