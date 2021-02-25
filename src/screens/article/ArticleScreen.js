import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Button,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './ArticleScreen.styles';
import patientAPI from '../../api/Patient';
import reportAPI from '../../api/Report';
import AppContext from '../../../context/AppContext';
const ReportComorbityScreen = () => {
  const [textReport, setTextReport] = useState('');
  const [selected, setSelected] = useState('');
  const user = useContext(AppContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    patientAPI
      .list()
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(selected);
    console.log(textReport);
    console.log(user.user.id_user);
  });

  const sendReport = () => {
    const reportBody = {
      message: textReport,
      id_user: user.user.id_user,
      id_patient: selected,
    };

    reportAPI
      .create(reportBody)
      .then((response) => {
        alert('Registro enviado !');
      })
      .catch((err) => alert('Falha ao enviar !'));
  };

  return (
    <KeyboardAvoidingView
      style={styles.flexOne}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
      <ScrollView style={styles.container}>
        <View style={styles.internWrapper}>
          <View style={styles.marginFields}>
            <Text style={styles.title}>
              Lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>

          <Image
            style={{
              marginTop: '10%',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            source={require('../../../images/image5.png')}
          />
          <View style={styles.marginFields}>
            <Text
              style={{
                fontSize: 20,
                paddingVertical: '5%',
                fontWeight: 'bold',
                color: '#0D253C',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text style={{fontSize: 14, color: '#0D253C', marginBottom: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consequat pretium sapien, eget efficitur mi venenatis eu. Vivamus
              ultrices eu lectus vitae blandit. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nullam nec nunc odio. Fusce
              bibendum commodo dolor, vel sodales justo eleifend eget. Donec ut
              orci tincidunt, placerat eros id, iaculis risus
            </Text>

            <Text style={{fontSize: 14, color: '#0D253C', marginBottom: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consequat pretium sapien, eget efficitur mi venenatis eu. Vivamus
              ultrices eu lectus vitae blandit. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nullam nec nunc odio. Fusce
              bibendum commodo dolor, vel sodales justo eleifend eget. Donec ut
              orci tincidunt, placerat eros id, iaculis risus
            </Text>

            <Text style={{fontSize: 14, color: '#0D253C'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consequat pretium sapien, eget efficitur mi venenatis eu. Vivamus
              ultrices eu lectus vitae blandit. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nullam nec nunc odio. Fusce
              bibendum commodo dolor, vel sodales justo eleifend eget. Donec ut
              orci tincidunt, placerat eros id, iaculis risus
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ReportComorbityScreen;
