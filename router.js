import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
// import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Home from "./Screens/Home";



const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        <AuthStack.Screen name="Registration" component={() => <RegistrationScreen isAuth={isAuth}/>} />
        <AuthStack.Screen name="Login" component={() => <LoginScreen isAuth={isAuth}/>}/>
      </AuthStack.Navigator>
    )
  }
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      activeColor="#FF6C00"
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 81,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "Roboto-Medium",
          lineHeight: 22,
          color: "#212121",
        
        },
      }} >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="grid-outline" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
          tabBarShowLabel: false,
          headerRight: () => (
            <Ionicons
              name="log-in-outline"
              size={30}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerShown: false,
        }}
      
        name="Home"
        component={Home} />
      <MainTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="add-circle-outline" size={30} color="#FF6C00" />
        ),
        tabBarShowLabel: false,
        headerTitle: "Создать публикацию",
        headerLeft: () => (
          <Ionicons name="arrow-back"
            size={24}
            color="rgba(33, 33, 33, 0.8)"
            style={{ marginLeft: 16 }} />
        ),
        headerStyle: {
          borderBottomWidth: 1,

        }
      }}
        name="CreatePostsScreen"
        component={CreatePostsScreen} />
      <MainTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="person-outline" size={24} color="rgba(33, 33, 33, 0.8)" />
        ),
        tabBarShowLabel: false,
        headerStyle: {
          borderBottomWidth: 1,
        },
        headerTitle: "Профиль",
      }}
        name="ProfileScreen"
        component={ProfileScreen} />
    </MainTab.Navigator>
     
  )
}


