import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseSDK/config"
import { authSlice } from "./authReducer";

export const authSignUpUser = ({ login, email, password }) => async (dispatch, getState) => {

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;
        await updateProfile(user, {
            displayName: login
        })
        
        const {uid, displayName} = await auth.currentUser;

        dispatch(authSlice.actions.updateUser({
            userId: uid,
            login: displayName
        }))
       
    } catch (error) {
        console.log("error", error)
        console.log("error.message", error.message)
    }
}
   

export const authSignInUser = ({ email, password }) => async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("user", user)
    } catch (error) {
        console.log("error", error)
        console.log("error.message", error.message)
    }
}

export const authSignOutUser = () => async (dispatch, getState) => {

}


