import React from 'react'
import { ActivityIndicator } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Text,View } from 'react-native';


export default function Authload({ navigation }){
  const auth=getAuth();
    onAuthStateChanged(auth,(user) => {
        if (user) {
          // User is logged in
          return(navigation.reset({
            index: 0,
            routes: [{ name: 'Dash' }],
          }))
        } else {
          // User is not logged in
          return(navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }))
        }
      })
}
