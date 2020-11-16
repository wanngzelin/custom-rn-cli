import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import RouteConfig from './RouteConfig';

const Stack = createStackNavigator();

export default () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerShown: false,
            headerMode: 'none',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        >
          {
            RouteConfig.map((item, index) => <Stack.Screen
              options={{
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec
                }
              }}
              key={index}
              name={item.name}
              component={item.component}
            />)
          }
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
