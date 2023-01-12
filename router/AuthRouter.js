import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screen/auth/login';
import Reset from '../screen/auth/reset';
import SignUp from '../screen/auth/signup';
import Main from "../screen/main/main";
import Places from "../screen/placeslist/placelistshow";
import Adam from "../screen/places/adam";
import Authload from "../screen/authload/authload";
import Ambuluwawa from "../screen/places/ambuluwawa";
import Arugambay from "../screen/places/arugam bay";
import Hospitallist from "../screen/Hospitals/hospitallist";





const Stack = createNativeStackNavigator();



export function Authscreens(){
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authload">
        <Stack.Screen name="Authload" component={Authload} options={{headerShown:false}}/>
        <Stack.Screen name="Places" component={Places} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={Reset} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Dash" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Hospital" component={Hospitallist} options={{headerShown:false}}/>
        <Stack.Screen name="Adam" component={Adam} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    );

}






