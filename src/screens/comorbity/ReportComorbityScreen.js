import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons';
import styles from './ReportComorbityScreen.styles';
import patientAPI from '../../api/Patient';

const ReportComorbityScreen = () => {
  const [country, setCountry] = useState([
    'UK',
    'BR',
    'IR',
    'IT',
    'FR',
    'NW',
    'US',
  ]);
  const [selected, setSelected] = useState('');
  const [patients, setPatients] = useState('');

  useEffect(() => {
    patientAPI
      .list()
      .then((response) => {
        setPatients(response.data.data);
        console.log(patients);
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
            {country.map((p) => (
              <Picker.Item label={p} value={p} />
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
