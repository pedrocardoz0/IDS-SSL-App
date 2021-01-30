import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './ReportComorbityScreen.styles';
import patientAPI from '../../api/Patient';

const ReportComorbityScreen = () => {
  const [textReport, setTextReport] = useState('');
  const [selected, setSelected] = useState('');
  const [patients, setPatients] = useState('');

  useEffect(() => {
    patientAPI
      .list()
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

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
            {patients.map(({name, id_patient}) => (
              <Picker.Item label={name} value={id_patient} />
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
    </ScrollView>
  );
};

export default ReportComorbityScreen;
