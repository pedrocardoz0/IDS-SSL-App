import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: Platform.OS === 'ios' ? '20%' : '10%',
  },

  secondaryText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#30475E',
  },

  principalText: {
    fontSize: 53,
    fontWeight: 'bold',
  },

  redText: {
    color: '#F05454',
  },
});
