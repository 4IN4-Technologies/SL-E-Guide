import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import React from 'react';
import { initializeApp, getApps, getApp } from "firebase/app";
import 'firebase/auth'
import RootRouter from './router/Rootrouter';
import { FirebaseConfig } from './router/configs/config';

getApps().length === 0 ? initializeApp(FirebaseConfig) : getApp();

export default function App() {  
  return (
    <RootRouter/>
  );
}

const styles = StyleSheet.create({


});

