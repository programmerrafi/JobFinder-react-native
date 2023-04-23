import {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import tw from 'twrnc';

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../components';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
