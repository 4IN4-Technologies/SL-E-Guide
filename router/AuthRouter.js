import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/auth/login';
import Reset from '../screen/auth/reset';
import SignUp from '../screen/auth/signup';
import Main from "../screen/main/main";
import Places from "../screen/placeslist/placelistshow";
import Authload from "../screen/authload/authload";
import Emergency from "../screen/emergency/emergency menu";
import Hospitallist from "../screen/Hospitals/hospitallist";
import {
Adam, 
Ambuluwawa,
Arugambay,
JaffnaFort,
Bahirawakanda,
Ella,
Gallefort,
Gregory,
Hakgala,
Hortan,
Koneshwaram,
Mirissa, 
MountLavinia,
Nallur,
LotusTower,
NineArch,
Peradeniya,
Pinnawala,
RawanaFalls,
Ruwanweliseya,
Sigiriya,
Sinharaja,
Templetooth,
Udawalawa,
Unawatuna,
VictoriaPark,
Yala,
Yapahuwa
} from '../screen/places'



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
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown:false}}/>
        <Stack.Screen name="Hospital" component={Hospitallist} options={{headerShown:false}}/>



        
        <Stack.Screen name="Adam" component={Adam} options={{headerShown:false}}/>
        <Stack.Screen name="Koneshwaram" component={Koneshwaram} options={{headerShown:false}}/>
        <Stack.Screen name="Arugambe" component={Arugambay} options={{headerShown:false}}/>
        <Stack.Screen name="Bahirawakanda" component={Bahirawakanda} options={{headerShown:false}}/>
        <Stack.Screen name="Ella" component={Ella} options={{headerShown:false}}/>
        <Stack.Screen name="GalleFort" component={Gallefort} options={{headerShown:false}}/>
        <Stack.Screen name="Gregory" component={Gregory} options={{headerShown:false}}/>
        <Stack.Screen name="Hakgala" component={Hakgala} options={{headerShown:false}}/>
        <Stack.Screen name="Horton" component={Hortan} options={{headerShown:false}}/>
        <Stack.Screen name="JaffnaFort" component={JaffnaFort} options={{headerShown:false}}/>
        <Stack.Screen name="Mirissa" component={Mirissa} options={{headerShown:false}}/>
        <Stack.Screen name="MountLavinia" component={MountLavinia} options={{headerShown:false}}/>
        <Stack.Screen name="Nallur" component={Nallur} options={{headerShown:false}}/>
        <Stack.Screen name="LotusTower" component={LotusTower} options={{headerShown:false}}/>
        <Stack.Screen name="NineArch" component={NineArch} options={{headerShown:false}}/>
        <Stack.Screen name="Peradeniya" component={Peradeniya} options={{headerShown:false}}/>
        <Stack.Screen name="Pinnawala" component={Pinnawala} options={{headerShown:false}}/>
        <Stack.Screen name="RawanaFalls" component={RawanaFalls} options={{headerShown:false}}/>
        <Stack.Screen name="Ruwanweliseya" component={Ruwanweliseya} options={{headerShown:false}}/>
        <Stack.Screen name="Sigiriya" component={Sigiriya} options={{headerShown:false}}/>
        <Stack.Screen name="Sinharaja" component={Sinharaja} options={{headerShown:false}}/>
        <Stack.Screen name="Templetooth" component={Templetooth} options={{headerShown:false}}/>
        <Stack.Screen name="Udawalawa" component={Udawalawa} options={{headerShown:false}}/>
        <Stack.Screen name="Unawatuna" component={Unawatuna} options={{headerShown:false}}/>
        <Stack.Screen name="VictoriaPark" component={VictoriaPark} options={{headerShown:false}}/>
        <Stack.Screen name="Yala" component={Yala} options={{headerShown:false}}/>
        <Stack.Screen name="Yapahuwa" component={Yapahuwa} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
    );

}






