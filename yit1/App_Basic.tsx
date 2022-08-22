/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

type Props = {};
const textStyle = {
  backgroundColor: '#F00',
  color: '#FFF',
  fontSize: 30,
  flex: 1,
};

const App = (props: Props) => {
  // return <Demo1 />;
  return <Demo2 />;
};

const Demo2 = () => (
  <View
    style={{
      backgroundColor: '#FF0',
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
    <View style={{width: 100, height: 100, backgroundColor: '#F00'}} />
  </View>
);

const Demo1 = () => (
  <View
    style={{
      flexDirection: 'column',
      backgroundColor: '#000',
      alignItems: 'stretch',
      flex: 1,
    }}>
    <Text style={{...textStyle, backgroundColor: '#F00'}}>1111</Text>
    <Text style={{...textStyle, backgroundColor: '#030'}}>2222</Text>
    <Text style={{...textStyle, backgroundColor: '#0F0'}}>3333</Text>
    <Text style={{...textStyle, backgroundColor: '#00F'}}>4444</Text>
  </View>
);

export default App;
