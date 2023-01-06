import { useEffect, useCallback, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView 
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';





export default function App() {
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const [fontsLoaded] = useFonts({
     'Roboto-Regular': require('./fonts/Roboto/Roboto-Regular.ttf'),
     'Roboto-Medium': require('./fonts/Roboto/Roboto-Medium.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("./img/BG.jpg")}
        style={styles.image}
      >
        <View style={styles.form}>
          <View style={styles.img}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('./img/addPhoto.png')}
                style={styles.imgAddPhoto}
              >
              </Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.textInput}>Регистрация</Text>
          <TextInput
            style={{
              ...styles.input,
              borderColor: isActiveLogin ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isActiveLogin ? "#FFFFFF" : "#F6F6F6"
            }}
            placeholder="Логин"
            placeholderTextColor="#BDBDBD"
            marginBottom={16}
            onFocus={() => setIsActiveLogin(true)}
            onBlur={() => setIsActiveLogin(false)}
          />
          <TextInput
            style={{
              ...styles.input,
              borderColor: isActiveEmail ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isActiveEmail ? "#FFFFFF" : "#F6F6F6"
            }}
            placeholder="Адрес электронной почты"
            placeholderTextColor="#BDBDBD"
            marginBottom={16}
            onFocus={() => setIsActiveEmail(true)}
            onBlur={() => setIsActiveEmail(false)}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                ...styles.inputPassword,
                borderColor: isActivePassword ? "#FF6C00" : "#E8E8E8",
                backgroundColor: isActivePassword ? "#FFFFFF" : "#F6F6F6"
              }}
              placeholder="Пароль"
              secureTextEntry={showPassword}
              placeholderTextColor="#BDBDBD"
              marginBottom={43}
              onFocus={() => setIsActivePassword(true)}
              onBlur={() => setIsActivePassword(false)}
            />
            <TouchableOpacity
              style={styles.buttonPassword}
              activeOpacity={0.7}
              onPressIn={() => setShowPassword(false)}
              onPressOut={() => setShowPassword(true)}
            >
              <Text style={styles.buttonText}>
                Показать
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonPrimary}
            activeOpacity={0.7}
          // onPress={onPress}
          >
            <Text style={styles.buttonPrimaryText}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
          // onPress={onPress}
          >
            <Text style={styles.buttonText}>
              Уже есть аккаунт? Войти
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    flex:0.7,
    height: 516,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    
  },
  textInput: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,
    marginTop: 92,
  },
  inputContainer: {
    marginHorizontal: 16,
    position: "relative",
    color: "#1B4371",
  },
  inputPassword: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
  buttonPassword: {
    position: "absolute",
    paddingVertical: 16,
    right: 0,
    marginRight: 16,
  },
  buttonPasswordText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  input: {
    borderWidth: 1,
    
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    marginHorizontal: 16,
  },
  buttonPrimary: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonPrimaryText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
    paddingVertical: 16,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  img: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    right: "50%",
    left: "50%",
    transform: [{ translateX: -60 }],
  },
  imgAddPhoto: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 81,
    right: -12.5,
  },
  inputHover: {
    borderColor: "#FF6C00",
  }
    
});
