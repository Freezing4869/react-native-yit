/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
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
          padding: 20,
          backgroundColor: '#FFF3',
          margin: 30,
          borderRadius: 10,
        }}>
        {/* Username entry */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              backgroundColor: '#F00',
              height: 40,
              width: 40,
              borderRadius: 20,
              marginRight: 16,
            }}
          />
          {/* TextField */}
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#0007',
              flex: 1,
              paddingLeft: 16,
              borderRadius: 15,
            }}
            placeholder="Username"
          />
        </View>

        {/* Divider       */}
        <View style={{height: 16}} />

        {/* Password entry */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              backgroundColor: '#FF0',
              height: 40,
              width: 40,
              borderRadius: 20,
              marginRight: 16,
            }}
          />
          {/* TextField */}
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#0007',
              flex: 1,
              paddingLeft: 16,
              borderRadius: 15,
            }}
            placeholder="Password"
          />
        </View>

        {/* Login Button    */}
        <Button title="Login" />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
