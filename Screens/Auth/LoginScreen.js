import { useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperation";



const initialState = {
  email: "",
  password: "",
}


export default function LoginScreen({ navigation }) {
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    dispatch(authSignInUser(formData));
    // setFormData(initialState);
  }
  
  

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../img/BG.jpg")}
          style={styles.image}
        >
          <View style={styles.form}>
            <View style={styles.img}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={require('../../img/addPhoto.png')}
                  style={styles.imgAddPhoto}
                >
                </Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.textInput}>Войти</Text>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isActiveEmail ? "#FF6C00" : "#E8E8E8",
                backgroundColor: isActiveEmail ? "#FFFFFF" : "#F6F6F6"
              }}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              value={formData.email}
              marginBottom={16}
              onFocus={() => setIsActiveEmail(true)}
              onBlur={() => setIsActiveEmail(false)}
              onChangeText={(value) => setFormData((prevState) => ({ ...prevState, email: value }))}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={{
                  ...styles.inputPassword,
                  borderColor: isActivePassword ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isActivePassword ? "#FFFFFF" : "#F6F6F6"
                }}
                placeholder="Пароль"
                value={formData.password}
                secureTextEntry={showPassword}
                placeholderTextColor="#BDBDBD"
                marginBottom={43}
                onFocus={() => setIsActivePassword(true)}
                onBlur={() => setIsActivePassword(false)}
                onChangeText={(value) => setFormData((prevState) => ({ ...prevState, password: value }))}
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
              onPress={handleLogin}
            >
              <Text style={styles.buttonPrimaryText}>
                Войти
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => { navigation.navigate("Registration") }}
            >
              <Text style={styles.buttonText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    flex:0.6,
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