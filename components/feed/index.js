import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Link from './Link';
import styles from './Feed.styles';

function Feed(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Comorbity')}
      style={styles.container}>
      <View style={styles.interWrapper}>
        <View style={styles.helfWidth}>
          <Text style={styles.cardTitle}>{props.text}</Text>

          <Link text={props.link} />
        </View>
        <View style={styles.helfWidth}>
          <Image style={styles.image} source={{uri: props.image}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Feed;
