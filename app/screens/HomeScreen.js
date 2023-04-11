import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import tw from 'twrnc';
import Screen from '../components/shared/Screen';

const HomeScreen = () => {
  // nothing to added here
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={tw`flex-1`}>
        <Text style={tw``}>HomeScreen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
