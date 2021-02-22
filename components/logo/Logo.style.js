import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container_logo: {
    marginVertical: Platform.OS === 'ios' ? '15%' : '18%',
    alignItems: 'center',
  },

  wrapper_principal: {
    borderRadius: 6,
    backgroundColor: '#27AE60',
  },

  principal: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },

  secondary: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59C36A',
    textTransform: 'uppercase',
  },
});
