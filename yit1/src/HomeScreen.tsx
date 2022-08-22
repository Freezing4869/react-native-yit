/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={{flex: 1}}
      source={require('./assets/img/gradient_bg.png')}>
      <View
        style={{
          height: 70,
          backgroundColor: '#FFF3',
          margin: 30,
          borderRadius: 10,
        }}>
        {/* Username entry */}
        <View style={{flexDirection: 'row'}}>
          {/* Icon */}
          <View
            style={{
              backgroundColor: '#F00',
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
          {/* TextField */}
          <TextInput placeholder="Username" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
