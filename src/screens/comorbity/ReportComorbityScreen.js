import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import styles from './ReportComorbityScreen.styles';

const ReportComorbityScreen = () => {
  const [country, setCountry] = useState('uk');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.internWrapper}>
        <View style={styles.marginFields}>
          <Text style={styles.fieldName}>Selecione uma pessoa</Text>
          <DropDownPicker
            items={[
              {
                label: 'USA',
                value: 'usa',
                icon: () => <Icon name="flag" size={18} color="#900" />,
                hidden: true,
              },
              {
                label: 'UK',
                value: 'uk',
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: 'France',
                value: 'france',
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
            ]}
            defaultValue={country}
            containerStyle={styles.dropDownHeight}
            style={styles.dropDown}
            itemStyle={styles.dropDownItem}
            dropDownStyle={styles.dropDownBgColor}
            onChangeItem={(item) => setCountry(item.value)}
          />

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
