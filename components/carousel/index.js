import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: require('../../images/tukanos.png'),
          text: 'Saúde',
        },
        {
          image: require('../../images/image.png'),
          text: 'Cultura',
        },
        {
          image: require('../../images/oca.png'),
          text: 'História',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          borderRadius: 28,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Image style={{width: '100%', borderRadius: 28}} source={item.image} />
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            left: 20,
            color: '#FFF',
            fontSize: 26,
            fontWeight: 'bold',
            padding: 20,
          }}>
          {item.text}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        layout={'default'}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.carouselItems}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        renderItem={this._renderItem}
        onSnapToItem={(index) => this.setState({activeIndex: index})}
      />
    );
  }
}

export default MyCarousel;
