import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {COLORS, icons, images, SIZES} from '../constants';

import {ScreenHeaderBtn} from '../components';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.lightWhite} barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitle: '',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

export default MainNavigator;
