import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../../../components/header/Header';
import Layout from '../../../components/layout';
import Feed from '../../../components/feed';
import MyCarousel from '../../../components/carousel';
import styles from './home.styles';

export default function HomeScreen({navigation}) {
  const data = [
    {
      text: 'Sit amet',
      subText: 'Lorem ipsum dolor sit amet, consectetur ?',
      image:
        'https://images.unsplash.com/photo-1606958389024-677c4e6c5904?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80',
      link: 'Registrar',
    },
    {
      text: 'Sit amet',
      subText: 'Lorem ipsum dolor sit amet, consectetur ?',
      image:
        'https://images.unsplash.com/photo-1598622658102-4dc07181d95f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      link: 'Ver',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View>
          <Header />
          <View
            style={{paddingBottom: 10, borderColor: '#FFF', borderWidth: 1}}>
            <MyCarousel />
          </View>

          <Layout>
            <View style={styles.feed_title_container}>
              <Text style={styles.feed_title_text}>Últimas Notícias</Text>
              <Text style={styles.feed_title_text_link}>Mais</Text>
            </View>

            {data.map((d, index) => {
              return (
                <Feed
                  navigation={navigation}
                  text={d.text}
                  subText={d.subText}
                  image={d.image}
                  link={d.link}
                  key={index}
                />
              );
            })}
          </Layout>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
