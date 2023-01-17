import { NavigationContainer  } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import useRoute from "./router";
import { store } from "./redux/store";
import {auth} from "./FirebaseSDK/config"





export default function App() {
  const [user, setUser] = useState(null);
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

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  })


  const routing = useRoute(user);

 
  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <NavigationContainer >
          {routing}
        </NavigationContainer>
      </View>
    </Provider>

     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


