import { Provider } from "react-redux";
import { useFonts } from 'expo-font';
import { useEffect, useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  View,
  StyleSheet
} from 'react-native';

import { store } from "./redux/store";
import {Main} from "./Components/Main";


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./fonts/Roboto/Roboto-Bold.ttf')
  });

  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={styles.container}>
      <Main/>
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})