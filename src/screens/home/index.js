import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../../components/header/Header';
import Layout from '../../../components/layout';
import Feed from '../../../components/feed';
import MyCarousel from '../../../components/carousel';
import styles from './home.styles';

export default function HomeScreen({navigation}) {
  const data = [
    {
      text: 'Registrar Novo Caso',
      image: 'https://static.poder360.com.br/2020/03/23312-1200x630.png',
      link: 'Registrar',
    },
    {
      text: 'Visualizar os Registros de Pacientes',
      image:
        'https://i.pinimg.com/originals/16/18/3d/16183dde48822e3ddcfb44e803298cc1.jpg',
      link: 'Ver',
    },
    {
      text: 'Visualizar os Registros de Históricos',
      image:
        'https://image.freepik.com/free-vector/isometric-book-icon-flat-style_100456-389.jpg',
      link: 'Ver',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Header />
        <View style={{paddingBottom: 10, borderColor: '#FFF', borderWidth: 1}}>
          <MyCarousel />
        </View>
        <Layout>
          {data.map((d, index) => {
            return (
              <Feed
                navigation={navigation}
                text={d.text}
                image={d.image}
                link={d.link}
                key={index}
              />
            );
          })}
        </Layout>
      </View>
    </SafeAreaView>
  );
}
