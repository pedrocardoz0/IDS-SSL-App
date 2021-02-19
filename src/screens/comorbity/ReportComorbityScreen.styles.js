import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF', paddingHorizontal: '4%'},

  flexOne: {flex: 1},

  title: {fontSize: 36, fontWeight: 'bold', marginTop: '6%'},

  titleMargin: {
    marginTop: 0,
    marginBottom: Platform.OS === 'ios' ? '20%' : '15%',
  },

  internWrapper: {marginBottom: 10},

  marginFields: {marginBottom: 10},

  fieldName: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: Platform.OS === 'ios' ? '3%' : '0%',
  },

  fieldRed: {
    fontSize: 16,
    marginLeft: '56%',
    color: '#FF1F1F',
  },

  dropDown: {
    backgroundColor: '#E5E5E5',
    borderWidth: 2,
    borderColor: '#000',
  },

  dropDownHeight: {width: '100%', height: Platform.OS === 'ios' ? 100 : '20%'},

  dropDownItem: {height: 100},

  textArea: {
    backgroundColor: '#FFF',
    height: 100,
    paddingHorizontal: '4%',
    paddingTop: '5%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },

  multimidiaText: {fontSize: 24, color: '#282A2C', fontWeight: 'bold'},
});
