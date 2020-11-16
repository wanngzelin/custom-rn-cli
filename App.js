/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './app/route/Navigator';
import { Root } from 'native-base';
import Loaading from 'components/Loaading';
import { setLoading } from 'utils/loading';

const App = () => {
  return (
    <Root>
      <StatusBar barStyle="dark-content" />
      <Navigator />
      <Loaading ref={ref => setLoading(ref)} />
    </Root>
  );
};
export default App;
