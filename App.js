import { NavigationContainer  } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect, useCallback, useState} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import useRoute from "./router";



export default function App(isAuth) {
   
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
  const routing = useRoute(isAuth);

 
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer >
        {routing}
      </NavigationContainer>
    </View>

     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


