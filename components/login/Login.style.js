import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  input_container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#59C36A',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  input_container_wrapper_text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  input_container_text: {
    padding: 20,
    color: '#FFF',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  input_container_inner: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  wellcome_text: {
    color: '#0D253C',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 4,
  },

  wellcome_text_sub: {
    color: '#0D253C',
    fontSize: 14,
  },

  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#D9DFEB',
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginVertical: Platform.OS === 'ios' ? '5%' : '4%',
    textTransform: 'lowercase',
  },

  border_focous: {
    borderBottomWidth: 1,
    borderColor: '#27AE60',
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginVertical: Platform.OS === 'ios' ? '5%' : '4%',
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#30475E',
  },

  wrapperButton: {
    width: '100%',
  },

  sendButton: {
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#59C36A',
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginTop: 60,
  },

  recover_text: {
    padding: 20,
    textAlign: 'center',
    color: '#2D4379',
    fontSize: 14,
  },

  recover_text_green: {
    color: '#219653',
    fontSize: 14,
  },

  sendButtonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
