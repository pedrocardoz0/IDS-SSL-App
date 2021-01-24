import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import Link from './Link';
function Feed(props) {
  return (
    <TouchableHighlight
      onPress={() => console.log('h1')}
      style={{
        flex: 0.2,
        backgroundColor: '#FFF',
        padding: 26,
        borderRadius: 16,
        marginBottom: 16,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              height: '90%'
            }}>
            {props.text}
          </Text>

          <Link text={props.link}/>
        </View>
        <View style={{width: '50%'}}>
          <Image style={{height: 100}} source={{uri: props.image}} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Feed;
