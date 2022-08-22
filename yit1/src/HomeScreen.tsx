import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Image
        source={require('./assets/img/avatar.png')}
        style={{height: 100, width: 100}}
      />
    </View>
  );
};

export default HomeScreen;
