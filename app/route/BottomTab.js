import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'pages/Home/Container';
import Mine from 'pages/Mine/Container';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => focused ? <Image source={require('assets/bottomIcon/home_foc.png')} style={{ width: 25, height: 25 }} /> : <Image source={require('assets/bottomIcon/home.png')} style={{ width: 25, height: 25 }} />
        }}
      />
      <Tab.Screen
        name="我的"
        component={Mine}
        options={{
          tabBarIcon: ({ focused }) => focused ? <Image source={require('assets/bottomIcon/mine_foc.png')} style={{ width: 25, height: 25 }} /> : <Image source={require('assets/bottomIcon/mine.png')} style={{ width: 25, height: 25 }} />
        }}
      />
    </Tab.Navigator>
  )
}

