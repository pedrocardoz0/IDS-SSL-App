import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './ReportComorbityScreen.styles';
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
    <ScrollView style={styles.container}>
      <View style={styles.internWrapper}>
        <View style={styles.marginFields}>
          <Text style={styles.fieldName}>Selecione uma pessoa</Text>

          <Picker
            selectedValue={selected}
            style={styles.dropDownHeight}
            itemStyle={styles.dropDownItem}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
            <Picker.Item label="selecione uma pessoa" value="" />
            {patients.map(({name, id_patient}, index) => (
              <Picker.Item label={name} value={id_patient} key={index} />
            ))}
          </Picker>

          <Text style={[styles.fieldName, styles.fieldRed]}>
            Cadastrar nova pessoa
          </Text>
        </View>

        <View style={styles.marginFields}>
          <Text style={styles.fieldName}>Registro da comorbidade</Text>

          <TextInput
            style={styles.textArea}
            placeholder="Digite os registros ..."
            onChangeText={setTextReport}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>

      <View style={styles.internWrapper}>
        <View style={styles.marginFields}>
          <Text style={styles.multimidiaText}>Multimídia</Text>
        </View>
      </View>

      <Button title="Enviar" onPress={sendReport} />
    </ScrollView>
  );
};

export default ReportComorbityScreen;
