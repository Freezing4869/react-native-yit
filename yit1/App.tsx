/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  const textStyle = {backgroundColor: '#F00', color: '#FFF', fontSize: 30};

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#000',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{...textStyle, backgroundColor: '#F00'}}>1111</Text>
      <Text style={{...textStyle, backgroundColor: '#030'}}>2222</Text>
      <Text style={{...textStyle, backgroundColor: '#0F0'}}>3333</Text>
      <Text style={{...textStyle, backgroundColor: '#00F'}}>4444</Text>
    </View>
  );
};

export default App;
