import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  input_container_inner: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#D9DFEB',
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginVertical: Platform.OS === 'ios' ? '5%' : '4%',
    textTransform: 'lowercase',
  },

  input_container_focous: {
    borderBottomWidth: 1,
    borderColor: '#27AE60',
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginVertical: Platform.OS === 'ios' ? '5%' : '4%',
  },
});
