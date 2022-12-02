import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/auth/login';
import Reset from '../screen/auth/reset';
import SignUp from '../screen/auth/signup';
import Main from '../screen/main/main';
import Qmap from "../screen/map/map";
import Flist from "../screen/fuel list/flist";

const Stack = createNativeStackNavigator();

const AppRouter = () =>{
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={Reset} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Qmap" component={Qmap} options={{headerShown:false}}/>
        <Stack.Screen name="Flist" component={Flist} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );

}

export default AppRouter;
