import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    margin: 20,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginVertical: Platform.OS === 'ios' ? '5%' : '8%',
    textTransform: 'lowercase',
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#30475E',
  },

  wrapperButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '25%',
  },

  sendButton: {
    fontWeight: 'bold',
    backgroundColor: '#F05454',
    alignContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 40,
    marginTop: 60,
  },

  sendButtonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
