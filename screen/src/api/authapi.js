import firebase from 'firebase/app'
import 'firebase/auth'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const logoutUser = () => {
  const auth=getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    error.message
  });
}

export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await 
      signInWithEmailAndPassword(getAuth(), email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
