/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import List from './Components/List';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <List />
    </SafeAreaView>
  );
}

export default App;
