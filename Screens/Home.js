import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";


import PostsScreen from "./PostsScreen";
import MapScreen from "./MapScreen"
import CommentsScreen from "./CommentsScreen"
import { authSignOutUser } from "../redux/auth/authOperation";



const NestedScreen = createNativeStackNavigator();

export default function Home() {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(authSignOutUser())
    }
    return (
        <NestedScreen.Navigator
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
        
                }
            }
            }>
            <NestedScreen.Screen
                options={{
                    headerTitle: "Публикации",
                    headerRight: () => (
                        <TouchableOpacity onPress={signOut}>
                            <Ionicons
                            name="log-in-outline"
                            size={30}
                            color="#BDBDBD"
                            style={{ marginRight: 10 }}
                        /></TouchableOpacity>
                    ),
                }}
                name="PostsScreen"
                component={PostsScreen}
            />
            <NestedScreen.Screen
                options={{
                    headerTitle: "Комментарии",
                   
                }}
                name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen
                options={{
                    headerTitle: "Карта",
                }}
                name="MapScreen" component={MapScreen} />
        </NestedScreen.Navigator>
    )
}