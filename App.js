import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import React from 'react';
import AppRouter from './router/router';
import { useFonts } from 'expo-font';


export default function App() {  
  return (
    <AppRouter/>
  );
}

const styles = StyleSheet.create({


});

